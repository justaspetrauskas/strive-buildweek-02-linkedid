
import "./App.css";

import Footer from "./conponents/Footer";
import Profile from "./conponents/Profile";
    import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
     <Navigation />
      <Profile />
      <Footer />
    </div>

  );
}

export default App;
