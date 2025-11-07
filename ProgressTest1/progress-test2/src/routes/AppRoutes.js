// src/routes/AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { PaymentProvider } from "../contexts/PaymentContext";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

import PaymentTable from "../components/PaymentTable";
import AddPayment from "../pages/AddPayment";
import ViewPayment from "../pages/ViewPayment";
import UserList from "../pages/UserList";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Router>
      <PaymentProvider>
        <Routes>

          {/* Redirect root → /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* ✅ Protected routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            {/* ✅ Default page */}
            <Route index element={<PaymentTable />} />

            {/* Payments routes */}
            <Route path="payments" element={<PaymentTable />} />
            <Route path="payments/add" element={<AddPayment />} />
            <Route path="payments/:id" element={<ViewPayment />} />

            {/* ✅ User List route */}
            <Route path="users" element={<UserList />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </PaymentProvider>
    </Router>
  );
};

export default AppRoutes;
