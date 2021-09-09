// css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// router
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import MainPage from "./components/MainPage";
// import MainFeed from "./components/MainFeed";
import FeedPage from "./components/FeedPage";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Navigation />
        <Route path="/" exact component={MainPage} />
        {/* this will be feed */}
        <Route path="/feed" exact component={FeedPage} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
