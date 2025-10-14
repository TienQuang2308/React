import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './components/pages/FooterPage';
import HomePage from './components/pages/HomePage';
import MoviePage from "./components/pages/MoviePage";
import Navbar from "./components/Navbar/Navbar";
import AccountPage from "./components/Account/AccountPage";

function App() {
  return (
    <div>
      {/* ✅ Thanh điều hướng */}
      <Navbar />

      {/* ✅ Trang chủ */}
      <HomePage />

      {/* ✅ Trang danh sách phim */}
      <MoviePage />

      {/* ✅ Trang Account Wizard */}
      <div className="container my-5">
        <AccountPage />
      </div>

      {/* ✅ Footer */}
      <FooterPage />
    </div>
  );
}

export default App;
