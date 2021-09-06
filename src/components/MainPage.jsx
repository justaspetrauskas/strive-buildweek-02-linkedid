import { Container, Row, Col } from "react-bootstrap";
import ProfileJumbo from "../components/ProfileJumbo";
import Sideprofile from "../components/Sideprofile";

const MainPage = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <ProfileJumbo />
        </Col>
        <Col md={3}>
          <Sideprofile />
        </Col>
      </Row>
    </Container>
  );
};
export default MainPage;
