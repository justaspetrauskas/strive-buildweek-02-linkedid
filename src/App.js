import "./App.css";

import Footer from "./components/Footer";

// import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation"



function App() {
  return (
    <div>
     <Navigation /> 
      <MainPage /> 
{/* <HomePage /> */}
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
