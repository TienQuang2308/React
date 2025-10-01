import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
