import "./App.css";

import Footer from "./conponents/Footer";

import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <MainPage />

      <Footer />
    </div>
  );
}

export default App;
