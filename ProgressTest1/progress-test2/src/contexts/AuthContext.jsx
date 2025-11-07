// AuthContext.jsx quản lý xác thực người dùng bằng Context API và useReducer
import React, { createContext, useContext, useReducer } from "react";
import * as api from "../services/api";

// 1. Tạo Context
const AuthContext = createContext();

// 2. Trạng thái khởi tạo
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

// 3. Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };

    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case "LOGIN_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "LOGOUT":
      localStorage.removeItem("user");
      return { ...initialAuthState };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};

// 4. AuthProvider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // ✅ Clear error
  const clearError = () => dispatch({ type: "CLEAR_ERROR" });

  // ✅ LOGIN (đã chỉnh theo yêu cầu)
  const login = async ({ usernameOrEmail, password }) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const accounts = await api.getUsers();

      // ✅ Tìm user bằng username hoặc email
      const user = accounts.find(
        (acc) =>
          (acc.username === usernameOrEmail ||
            (acc.email && acc.email === usernameOrEmail)) &&
          acc.password === password
      );

      if (!user) {
        const msg = "Invalid username/email or password!";
        dispatch({ type: "LOGIN_FAILURE", payload: msg });
        return { success: false, error: msg };
      }

      // ✅ Kiểm tra STATUS
      if (user.status === "blocked" || user.status === "locked") {
        const msg = "Tài khoản của bạn đã bị khóa. Không thể đăng nhập!";
        dispatch({ type: "LOGIN_FAILURE", payload: msg });
        return { success: false, error: msg };
      }

      // ✅ Kiểm tra ROLE (chỉ admin mới được vào dashboard)
      if (user.role !== "admin") {
        const msg = "Bạn không có quyền truy cập trang này (chỉ ADMIN)!";
        dispatch({ type: "LOGIN_FAILURE", payload: msg });
        return { success: false, error: msg };
      }

      // ✅ Đăng nhập thành công
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      return { success: true, user };
    } catch (error) {
      const msg = error.message || "Login failed!";
      dispatch({ type: "LOGIN_FAILURE", payload: msg });
      return { success: false, error: msg };
    }
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.isLoading,
        error: state.error,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 5. Custom hook
export const useAuth = () => useContext(AuthContext);
