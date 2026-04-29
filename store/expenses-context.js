import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2025-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 59.99,
        date: new Date('2026-01-15')
    },
    {
        id: 'e3',
        description: '10 kg of  bananas',
        amount: 39.99,
        date: new Date('2025-01-14')
    },
    {
        id: 'e4',
        description: 'A Book',
        amount: 9.99,
        date: new Date('2025-01-15')
    },
    {
        id: 'e5',
        description: 'A Book for Life',
        amount: 10.99,
        date: new Date('2026-04-25')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state
    }
}

function ExpensesContextProvider({ children }) {

    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;