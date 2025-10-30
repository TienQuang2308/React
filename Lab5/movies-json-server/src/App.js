import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuthState } from './contexts/AuthContext';
import MovieManager from './pages/MovieManager';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/movies" element={
            <PrivateRoute>
              <MovieManager />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
