# MONEY TRACKER

<div align='center'>

![](src/img/tech-news-demo.gif) 
[Demo](https://francescovicario.github.io/money-tracker/)</div>

In this project I wanted to create a simple and minimal way to manage personal finances, essential in order to save money and increase own wealth in the long term.
After filling in the form with requested data, total budget will be updated and transaction details will be reported on the lower part of the site depending on the type of transaction.

This project really tested my skills - it is the first in which I have used these frameworks together. It was not as easy as expected, and for that reason very satisfying and rewarding to complete.

Want to know more about the project? Do you have any feedback? Hit me up on [linkedin](https://www.linkedin.com/in/francesco-vicario/)!

## Technical details

This single-page website uses the following frameworks:

- [`react`](https://reactjs.org/)
- [`redux`](https://redux.js.org/)
- [`styled-components`](https://styled-components.com/)

I created two slices for this project, `total` and `transactions`: 
the first one manages total incomes and expenses, state is an object with keys `incomes` and `expenses` and values the sum of incomes and expenses, by default obviously equal to 0. The two reducers `addAmount` and `removeAmount` edit the values of incomes and expenses based on the values of isIncome (boolean) and amount (number); 
the second one handles transactions' history. Here the state is an empty array: `addTransaction` will add transaction's object to the state via `push()`, while `removeTransaction` will delete the selected transaction by filtering the state with `filter()`.

**TOTAL**

This is the first component, here the total budget and total incomes and expenses selected from `totalSlice` are shown. After calculating total by subtracting expenses from incomes, the result is formatted with `Intl.NumberFormat` along with `incomes` and `expenses`.

**NEWTRANSACTION**

This component is responsible for managing the site form: it consists of 4 input fields (2 text, category, number) and a button div (isIncome), each of these linked to a state that handles its value. On saving, after checking that all fields are filled, `addTransactions` and `addAmount` dispatches are performed, passing an object as argument with values the aforementioned states' values, to then emptying them. 
Whenever there are one or more empty states on save or on fields' blur, via the `Valid` states a red border will be set on the state's related input field, which will be removed once the field is on focus. 
When the second text field is on focus it becomes an input date, converting the value with `setDateFormat` once it's out of focus - I made this choice to insert the placeholder in the field, thus avoiding the need to use labels for all fields.

**TRANSACTIONSHISTORY**

The last component shows the transactions saved inside `transactions` state. Double inserted, with the difference of the `type` props values, after selecting the transactions from the slice with `useSelector` they are filtered according to the value of the props type and saved in `filteredTransactions` variable. After that, they are sorted from newest to oldest (using `sort()`) and finally, via `map()`, the values are taken and passed as props to `SingleTransaction` which will take charge of rendering data. 
In this last component you can also find a small button, visible in hover and focus, which on click will remove the transaction from the states by executing `removeTransaction` and `removeAmount` dispatches.

**LAYOUT**

I opted for three different layouts: 
The first two (for medium/large devices) have the sole difference of sorting from horizontal to vertical `Total` and `NewTransaction` (with the latter moving to the low when the breakpoint is reached), with the two `TransactionsHistory` taking up the bottom part of the screen;
As for the last one (for small devices), I chose to leave `Total` at the top and add a tab bar that shows one between `NewTransaction` (with the input fields now shown vertically) and `TransactionsHistory`. The latter, displayed by default, uses the same principle to alternately display one between incomes and expenses.

---

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
