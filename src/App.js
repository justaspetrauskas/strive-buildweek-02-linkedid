import "./App.css";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FeedsLeftBar from "./components/FeedsLeftBar";

// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ background: "#cfcfcf" }}>
      {/* <Profile /> */}
      <FeedsLeftBar />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
