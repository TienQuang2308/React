// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext } from "react";

// 1. Tạo context với giá trị mặc định
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

// 2. Tạo Provider để bao bọc ứng dụng
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const contextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook để sử dụng context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
