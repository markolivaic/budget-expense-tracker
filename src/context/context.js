import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 25,
    category: "Phone",
    type: "Expense",
    date: "2022-05-06",
    id: "c56d610f-ddc3-4daf-a84b-9b5d9bbcf783",
  },
  {
    amount: 20,
    category: "Gifts",
    type: "Income",
    date: "2022-04-05",
    id: "4be26c9e-d2c6-4e50-abc4-4003027291c6",
  },
  {
    amount: 100,
    category: "Clothes",
    type: "Expense",
    date: "2022-04-05",
    id: "656c9b6a-e102-4967-8e4d-936080f21d7a",
  },
  {
    amount: 50,
    category: "Investments",
    type: "Income",
    date: "2022-04-05",
    id: "e9350b0d-f490-4bf0-99e5-c772e22b29e5",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
