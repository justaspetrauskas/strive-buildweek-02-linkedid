import { Container, Row, Col } from "react-bootstrap";
import ProfileJumbo from "../components/ProfileJumbo";
import Sideprofile from "../components/Sideprofile";
import Education from "../components/Education";
import Activity from "./Activity";
import Experience from "./Experience";
import DashBoard from "./Dashboard";

const MainPage = () => {
  return (
    <Container>
      <Row>
        <Col md={9} className="mt-4">
          <ProfileJumbo />
          <div className ='mt-4'>           <DashBoard /> </div>
<div className ='mt-4'>           <Activity /> </div>
<div className ='mt-4'>    <Experience /></div>
<div className ='mt-4'>  <Education /></div>
        </Col>
        <Col md={3} className="mt-5">
          <Sideprofile />
        </Col>
      </Row>
    </Container>
  );
};
export default MainPage;
