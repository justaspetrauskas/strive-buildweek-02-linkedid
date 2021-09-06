import logo from "./logo.svg";
import "./App.css";
require("dotenv").config();
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar'
import Profile from './components/Profile';


function App() {
  return (
    <>
<Router >
<Navbar />

<Container >
  <Row>  
    
    <Col md={9}><Route path = '/' exact component= {Profile} /> <Profile /> </Col>
    <Col md={3}> <SideBar /> </Col>
    </Row> 
  
   <Conainer />




<Footer />
</Router>
    </>
  );
}

export default App;
