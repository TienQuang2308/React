import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import EditExpensePage from "../pages/EditExpensePage"; // ✅ Thêm trang mới

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditExpensePage />} /> {/* ✅ */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
