import React, { createContext, useReducer, useEffect, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

export const ExpenseContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "EDIT":
      return state.map((e) => (e.id === action.payload.id ? action.payload : e));
    case "DELETE":
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(reducer, []);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      api.get(`/expenses?userId=${user.id}`).then((res) => {
        dispatch({ type: "SET", payload: res.data });
      });
    }
  }, [user]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
