import MainFeed from "./MainFeed";
import LeftProfile from "./LeftProfile";
import PostModal from "./PostModal";
import SideFeed from "./SideFeed";

import { Container, Row, Col } from "react-bootstrap";

import "../style/MainFeed.css";
import "../style/LeftProfile.css";

const FeedPage = () => {
  return (
    <Container className="main-feed-container">
      <Row className="test">
        <Col md={3} className="d-none d-lg-block profile">
          <LeftProfile />
        </Col>
        <Col md={6} xs={12} className="main-feed">
          <PostModal />
          <MainFeed />
        </Col>
        <Col md={3} className="d-none d-lg-block aside">
          <SideFeed />
        </Col>
      </Row>
    </Container>
  );
};
export default FeedPage;
