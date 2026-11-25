# SpendWise Dashboard

## Project Description

SpendWise is a responsive personal finance dashboard designed to help users view and organize their monthly financial information.

This Week 4 project focuses on building a modern dashboard layout using CSS Grid and Flexbox. It uses realistic static financial information and does not require JavaScript functionality.

## Technologies Used

- HTML5 – Dashboard structure and content.
- CSS3 – Visual styling and responsive layouts.
- CSS Grid – Overall dashboard and category card layout.
- Flexbox – Sidebar navigation, header and card content alignment.
- CSS Custom Properties – Centralized color theme.
- Media Queries – Responsive mobile layout.

## Project Structure

### 1. index.html

Contains:
- SpendWise branding and sidebar navigation.
- Dashboard header and account profile.
- Financial overview section.
- Six financial category cards:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Savings
  - Utilities
- Dashboard footer.

### 2. style.css

Controls the dashboard appearance and layout through:

- CSS Grid for the main dashboard structure.
- Flexbox for navigation, header and card content.
- CSS custom properties defined in `:root`.
- Responsive design below 768px.
- Card hover and keyboard-focus animations.
- Dark theme using `prefers-color-scheme: dark`.
- Consistent spacing, borders, colors and shadows.

## Responsive Design

The dashboard uses a media query to change into a single-column layout on screens smaller than 768px.

The layout was tested using the browser's DevTools Device Toolbar.

## Card Micro-interactions

Dashboard cards include subtle hover and keyboard-focus effects using CSS transforms and box shadows.

The transitions last 200 milliseconds.

## Dark Theme

A dark theme is included using the CSS media query:

`@media (prefers-color-scheme: dark)`

The dark theme changes the CSS custom properties to provide a darker interface.

## How to Run the Project

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser.
4. Alternatively, use the Live Server extension.

## Author

SpendWise Dashboard – Week 4 Project