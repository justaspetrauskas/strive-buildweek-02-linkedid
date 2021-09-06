import "./App.css";


import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProfileJumbo from "./components/ProfileJumbo";
import Navigation from "./components/Navigation";
import Sideprofile from './components/Sideprofile'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
    <Sideprofile />
      <ProfileJumbo />
      <Footer />
    </div>
  );
}

export default App;
