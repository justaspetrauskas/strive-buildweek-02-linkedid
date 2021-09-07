import "./App.css";

import Footer from "./components/Footer";
import Activity from "./components/Activity";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Profile />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
