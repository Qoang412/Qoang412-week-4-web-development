// ========================================
// SPENDWISE - WEEK 6 JAVASCRIPT FOUNDATION
// ========================================

// 1. VARIABLES AND DATA TYPES

let monthlyBudget = 0;
let totalIncome = 0;
let totalExpenses = 0;
let remainingBalance = 0;

let expenses = [];

const currency = "KSh";


// 2. FORMAT CURRENCY

function formatCurrency(amount) {
    return currency + " " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


// 3. COLLECT USER BUDGET

function collectBudgetInput() {
    const budgetInput = prompt(
        "Welcome to SpendWise!\nEnter your monthly income/budget (KSh):"
    );

    if (
        budgetInput === null ||
        budgetInput.trim() === "" ||
        !Number.isFinite(Number(budgetInput)) ||
        Number(budgetInput) <= 0
    ) {
        console.log("Invalid budget. Please refresh and try again.");
        return false;
    }

    monthlyBudget = Number(budgetInput);
    totalIncome = monthlyBudget;

    return true;
}


// 4. COLLECT EXPENSE INFORMATION

function addExpense() {
    const expenseName = prompt("Enter expense name:");

    if (expenseName === null || expenseName.trim() === "") {
        console.log("Expense name is required.");
        return;
    }

    const amountInput = prompt(
        "Enter expense amount (KSh):"
    );

    if (
        amountInput === null ||
        amountInput.trim() === "" ||
        !Number.isFinite(Number(amountInput)) ||
        Number(amountInput) <= 0
    ) {
        console.log("Please enter a valid expense amount.");
        return;
    }

    const expenseAmount = Number(amountInput);

    // Store expense as an object inside an array
    const expense = {
        name: expenseName.trim(),
        amount: expenseAmount
    };

    expenses.push(expense);

    console.log("Expense added successfully:", expense);
}


// 5. CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {
    totalExpenses = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    return totalExpenses;
}


// 6. CALCULATE REMAINING BALANCE

function calculateRemainingBalance() {
    calculateTotalExpenses();

    remainingBalance = totalIncome - totalExpenses;

    return remainingBalance;
}


// 7. UPDATE DASHBOARD

function updateDashboard() {
    calculateTotalExpenses();
    calculateRemainingBalance();

    const summaryCards = document.querySelectorAll(
        ".summary-card"
    );

    if (summaryCards.length >= 3) {
        summaryCards[0].querySelector("h2").textContent =
            formatCurrency(remainingBalance);

        summaryCards[1].querySelector("h2").textContent =
            formatCurrency(totalIncome);

        summaryCards[2].querySelector("h2").textContent =
            formatCurrency(totalExpenses);

        summaryCards[0].querySelector("p").textContent =
            "Available after expenses";

        summaryCards[1].querySelector("p").textContent =
            "Monthly budget entered";

        summaryCards[2].querySelector("p").textContent =
            "Total recorded spending";
    }
}


// 8. DISPLAY RESULTS IN CONSOLE

function displayResults() {
    calculateTotalExpenses();
    calculateRemainingBalance();

    console.log("====================================");
    console.log("       SPENDWISE BUDGET SUMMARY     ");
    console.log("====================================");

    console.log("Monthly Budget:", formatCurrency(monthlyBudget));
    console.log("Total Income:", formatCurrency(totalIncome));
    console.log("Total Expenses:", formatCurrency(totalExpenses));
    console.log("Remaining Balance:", formatCurrency(remainingBalance));

    console.log("------------------------------------");
    console.log("EXPENSE DETAILS");
    console.log("------------------------------------");

    if (expenses.length === 0) {
        console.log("No expenses recorded.");
    } else {
        console.table(expenses);
    }

    if (remainingBalance < 0) {
        console.log("WARNING: You have exceeded your budget!");
    } else {
        console.log("STATUS: You are within your budget.");
    }

    console.log("====================================");
}


// 9. MAIN APPLICATION

function startSpendWise() {
    const validBudget = collectBudgetInput();

    if (!validBudget) {
        return;
    }

    let running = true;

    while (running) {
        const choice = prompt(
            "SPENDWISE MENU\n\n" +
            "1. Add Expense\n" +
            "2. View Budget Summary\n" +
            "3. Finish\n\n" +
            "Enter your choice:"
        );

        if (choice === null || choice === "3") {
            running = false;
        } else if (choice === "1") {
            addExpense();
        } else if (choice === "2") {
            displayResults();
        } else {
            console.log("Invalid choice. Select 1, 2, or 3.");
        }
    }

    updateDashboard();
    displayResults();

    console.log("Thank you for using SpendWise!");
}


// 10. START APPLICATION

startSpendWise();
