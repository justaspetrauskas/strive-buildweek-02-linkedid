import { Row, Col, Card, ListGroup } from "react-bootstrap";
const DashBoard = () => {
  return (
    <Card border="#575551" style={{ background: "#98a8b4" }}>
      <Card.Body>
        <Row pill="true" bg="primary" border="#575551" className="px-4 m-0">
          <Col className="col-10">
            <h5>Your Dashboard</h5>
            <span>Private to you</span>
          </Col>
          <Col className="col-2">
            <p>
              <i className="bi bi-star"></i>
              All Star
            </p>
          </Col>
        </Row>

        <Row className="">
          <Col sm style={{ background: "white", margin: "1px" }}>
            <h1 style={{ fontSize: "28px", color: "#3a5599" }}>150</h1>
            <p className="small text-dark">Who Viewed Your Profile</p>
          </Col>
          <Col sm style={{ background: "white", margin: "1px" }}>
            <h1 style={{ fontSize: "28px", color: "#3a5599" }}>50</h1>
            <p className="small text-dark">Post Views</p>
          </Col>
          <Col sm style={{ background: "white", margin: "1px" }}>
            <h1 style={{ fontSize: "28px", color: "#3a5599" }}>35</h1>
            <p className="small text-dark">Search appearances</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="col-12">
            <ListGroup>
              <ListGroup.Item>
                <i className="bi bi-wifi"></i> <span>Creator mode :</span>Off
                <p className="small">
                  Grow your audience and get discovered by highlighting content
                  on your profile.
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <i className="bi bi-people-fill"></i> Dapibus ac facilisis in
                <p className="small">
                  Manage your connections, events, and interests.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi bi-bookmark-fill"></i> My Teams
                <p className="small">
                  Keep track of your jobs, courses and articles.
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default DashBoard;
