import React, { createContext, useContext, useReducer, useCallback } from "react";
import movieApi from "../api/movieAPI";

// ---- State & Reducer ----
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, isAuthenticated: true, loading: false };
    case "LOGIN_FAIL":
      return { ...state, error: "Sai tên đăng nhập hoặc mật khẩu", loading: false };
    case "LOGOUT":
      return initialAuthState;
    default:
      return state;
  }
};

// ---- Context Provider ----
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = useCallback(async (username, password) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await movieApi.get(`/accounts?username=${username}&password=${password}`);
      if (res.data.length > 0) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data[0] });
        return true;
      } else {
        dispatch({ type: "LOGIN_FAIL" });
        return false;
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOGIN_FAIL" });
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={{ login, logout }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

// ---- Custom Hooks ----
export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
