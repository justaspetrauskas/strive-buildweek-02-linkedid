import MainFeed from "./MainFeed";
import LeftProfile from "./LeftProfile";

import "../style/MainFeed.css";
import "../style/LeftProfile.css";

const FeedPage = () => {
  return (
    <Container className="main-feed-container">
      <Row className="test">
        <Col md={2} className="d-none d-lg-block profile">
          <LeftProfile />
        </Col>
        <Col md={7} xs={12} className="main-feed">
          <MainFeed />
        </Col>
        <Col md={3} className="d-none d-lg-block aside">
          <div> this is a test for the side container</div>
        </Col>
      </Row>
    </Container>
  );
};
export default FeedPage;
