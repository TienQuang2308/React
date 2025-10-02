import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import BookTable from "./components/BookTable";


function App() {
  return (
    <div>
      <NavbarComponent />
      <Banner />
      <Menu />
      <BookTable />

    </div>
  );
}

export default App;
