
// ========================================
// SPENDWISE - WEEK 6 JAVASCRIPT FOUNDATION
// ========================================

// 1. VARIABLES AND DATA TYPES

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

let expenses = [];

const currency = "KSh";


// 2. FUNCTION TO COLLECT USER INPUT

function collectBudgetInput() {
    let budgetInput = prompt(
        "Welcome to SpendWise!\nEnter your monthly budget (KSh):"
    );

    monthlyBudget = Number(budgetInput);

    if (
        budgetInput === null ||
        budgetInput.trim() === "" ||
        !Number.isFinite(monthlyBudget) ||
        monthlyBudget <= 0
    ) {
        console.log("Please enter a valid monthly budget.");
        return false;
    }

    return true;
}


// 3. FUNCTION TO ADD EXPENSES

function addExpense() {
    let expenseName = prompt("Enter expense name:");

    if (expenseName === null || expenseName.trim() === "") {
        console.log("Expense name is required.");
        return;
    }

    let expenseAmountInput = prompt(
        "Enter expense amount (KSh):"
    );

    if (
        expenseAmountInput === null ||
        expenseAmountInput.trim() === ""
    ) {
        console.log("Please enter a valid expense amount.");
        return;
    }

    let expenseAmount = Number(expenseAmountInput);

    if (!Number.isFinite(expenseAmount) || expenseAmount <= 0) {
        console.log("Expense amount must be greater than zero.");
        return;
    }

    // Store expense information in an object
    let expense = {
        name: expenseName.trim(),
        amount: expenseAmount
    };

    expenses.push(expense);

    console.log("Expense added successfully!");
}


// 4. FUNCTION TO CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {
    totalExpenses = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    return totalExpenses;
}


// 5. FUNCTION TO CALCULATE REMAINING BALANCE

function calculateRemainingBalance() {
    calculateTotalExpenses();

    remainingBalance = monthlyBudget - totalExpenses;

    return remainingBalance;
}


// 6. FUNCTION TO DISPLAY RESULTS

function displayResults() {
    console.clear();

    console.log("================================");
    console.log("       SPENDWISE SUMMARY        ");
    console.log("================================");

    console.log("Monthly Budget: " + currency + " " + monthlyBudget);

    console.log("Total Expenses: " + currency + " " + calculateTotalExpenses());

    console.log("Remaining Balance: " + currency + " " + calculateRemainingBalance());

    console.log("--------------------------------");
    console.log("EXPENSE DETAILS");
    console.log("--------------------------------");

    if (expenses.length === 0) {
        console.log("No expenses recorded yet.");
    }

    expenses.forEach(function(expense, index) {
        console.log(
            (index + 1) + ". " +
            expense.name + ": " +
            currency + " " + expense.amount
        );
    });

    if (remainingBalance < 0) {
        console.log("WARNING: You have exceeded your budget!");
    } else {
        console.log("You are within your budget.");
    }

    console.log("================================");
}


// 7. MAIN APPLICATION FUNCTION

function startSpendWise() {

    let validBudget = collectBudgetInput();

    if (!validBudget) {
        console.log("SpendWise stopped. Please refresh to try again.");
        return;
    }

    let continueAdding = true;

    while (continueAdding) {

        let choice = prompt(
            "SPENDWISE MENU\n\n" +
            "1. Add Expense\n" +
            "2. View Budget Summary\n" +
            "3. Exit\n\n" +
            "Enter your choice:"
        );

        if (choice === null || choice === "3") {
            continueAdding = false;
            console.log("Thank you for using SpendWise!");
        }

        else if (choice === "1") {
            addExpense();
        }

        else if (choice === "2") {
            displayResults();
        }

        else {
            console.log("Invalid choice. Please select 1, 2, or 3.");
        }
    }

    displayResults();
}


// 8. START APPLICATION

startSpendWise();
