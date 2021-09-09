import { Container, Row, Col } from "react-bootstrap";

import LeftProfile from "./LeftProfile";
import PostModal from "./PostModal";
import SearchProfile from "./SearchProfile";
import Navigation from "./Navigation";

const HomePage = () => {
  return (
    <Container>
      <Navigation />
      <Row>
        <Col md={2} className="mt-4">
          <LeftProfile />{" "}
        </Col>
        <Col md={7} className="mt-5">
          
          <PostModal />
        </Col>
        <Col md={3} className="mt-5">
          Zukhriddin section
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
