# SpendWise Dashboard Shell

## Project Overview

SpendWise is a responsive personal finance dashboard built using HTML5 and CSS3. It provides a visual overview of financial activities, including income, expenses, savings, and spending categories.

## Features

- Sidebar navigation menu.
- Dashboard header and user profile.
- Three financial summary cards.
- Six expense category cards.
- Recent transactions section.
- Responsive layout for mobile and desktop.
- Light and dark color themes.
- Hover and keyboard focus micro-interactions.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries
- Google Fonts (Inter)

## Project Files

### index.html
Contains the dashboard structure, navigation, header, financial summary cards, six expense categories, recent transactions, and footer.

### style.css
Controls the visual appearance of the dashboard. It includes CSS Grid for the overall layout, Flexbox for internal arrangements, CSS variables for the theme, responsive media queries, hover and focus animations, and a dark theme.

### README.md
Explains the project, its features, technologies, and file structure.

## Responsive Design

The dashboard uses CSS Grid and Flexbox to adapt to different screen sizes. Below 768px, the layout changes into a single-column structure.

## Dark Theme

The dashboard supports system dark mode through:

`@media (prefers-color-scheme: dark)`

The dark theme overrides the root CSS custom properties.

## Author

Koang Duay Gatluak

## Project Purpose

This project was developed as part of the Week 4 Web Development assignment, focusing on rebuilding a financial dashboard using CSS Grid and Flexbox.
# SpendWise – Week 6 JavaScript Foundation

## Project Description

SpendWise is a personal budget tracking application designed to help users manage their monthly budgets, record expenses, calculate total spending, and monitor their remaining balances.

This Week 6 assignment introduces JavaScript functionality to transform SpendWise into a data-processing application.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

1. Variables and constants.
2. Data types.
3. User input using `prompt()`.
4. Conditional statements (`if`, `else if`, and `else`).
5. Loops (`while` and `for`).
6. Arrays and objects.
7. Reusable functions.
8. Arithmetic calculations.
9. Console output using `console.log()`.

## How Variables Are Used

The application uses variables to store important budgeting information:

- `monthlyBudget` stores the user's monthly budget.
- `totalExpenses` stores the total amount spent.
- `remainingBalance` stores the money remaining.
- `expenses` stores individual expense records.
- `currency` stores the currency label.

## How User Input Is Collected

SpendWise uses JavaScript's `prompt()` function to collect information from users.

Users can enter:
- Their monthly budget.
- Expense names.
- Expense amounts.
- Menu choices.

The application validates user input before processing it.

## How Calculations Are Performed

SpendWise calculates total expenses by adding the amounts of all recorded expenses.

The remaining balance is calculated using:

Remaining Balance = Monthly Budget - Total Expenses

## How Functions Organize the Code

The application uses reusable functions:

- `collectBudgetInput()` collects the monthly budget.
- `addExpense()` records new expenses.
- `calculateTotalExpenses()` calculates total spending.
- `calculateRemainingBalance()` calculates the remaining budget.
- `displayResults()` displays the budget summary.
- `startSpendWise()` controls the application.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser using Live Server.
4. Enter your monthly budget when prompted.
5. Add expenses using the SpendWise menu.
6. Open the browser Developer Tools using F12.
7. Select the Console tab to view the results.

## Project Files

- `index.html` – Application structure.
- `style.css` – Application styling.
- `script.js` – JavaScript functionality.
- `README.md` – Project documentation.

## Author

Koang Duay Gatluak

## Project

SpendWise – Week 6 JavaScript Foundation
