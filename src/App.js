import logo from "./logo.svg";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <>
<Router >
<Navbar />

<Container >
  <Row>  
    <Col> </Col> 
    <Col md={8}><Route path = '/' exact component= {Profile} /> <Profile /> </Col>
    <Col md={3}> <SideBar /> </Col>
    </Row> 
  
   <Conainer />
<Footer />
</Router>
    </>
  );
}

export default App;
