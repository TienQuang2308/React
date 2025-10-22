import React from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import LightSwitch from "./components/LightSwitch";
import CounterComponent from "./components/CounterComponent";

function ThemedApp() {
  const { theme } = useTheme(); // Lấy theme từ context

  const appStyle = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#1e1e1e",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease", // Hiệu ứng mượt khi chuyển theme
  };

  return (
    <div style={appStyle}>
      <h1>🌗 Theme Context Demo</h1>
      <CounterComponent />
      <hr style={{ width: "50%", margin: "20px 0" }} />
      <LightSwitch />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
