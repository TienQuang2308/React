// Bước 11: Cập nhật App.js

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // 1. Đặt AuthProvider ở cấp cao nhất trong ứng dụng để cung cấp Context cho toàn bộ ứng dụng
    <AuthProvider>
      <div className="App">
        {/* Sử dụng AppRoutes để quản lý các route trong ứng dụng */}
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
