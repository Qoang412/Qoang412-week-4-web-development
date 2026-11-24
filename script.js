
// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select HTML elements
    const expenseForm = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const expenseCategory = document.getElementById("expense-category");
    const expenseList = document.getElementById("expense-list");
    const emptyMessage = document.getElementById("empty-message");

    // Listen for form submission
    expenseForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        // Get input values
        const name = expenseName.value.trim();
        const amount = Number(expenseAmount.value);
        const category = expenseCategory.value.trim();

        // Validate inputs
        if (
            name === "" ||
            category === "" ||
            !Number.isFinite(amount) ||
            amount <= 0
        ) {
            alert("Please enter valid expense details.");
            return;
        }

        // Remove placeholder message
        emptyMessage.style.display = "none";

        // Create a new expense item
        const expenseItem = document.createElement("li");

        expenseItem.textContent =
            name + " - KSh " + amount.toFixed(2) +
            " (" + category + ")";

        // Add expense to the list
        expenseList.appendChild(expenseItem);

        // Clear input fields
        expenseForm.reset();

    });

});
