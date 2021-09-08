import { Row, Col, Card, Container } from "react-bootstrap";

const FeedsLeftBar = () => {
  return (
    <Container>
      <Row>
        <Col className="col-3 p-0">
          <Card>
            <Card.Body>
              <Row>
                <Col className="col-12 col-sm-12 col-md-12 col-lg-12 text-center small">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQGhp9AGnNzl6Q/profile-displayphoto-shrink_100_100/0/1517866361123?e=1635379200&v=beta&t=wpzWpKHGBMm0GVrFOyfQDrnjqao7tMLCVXEY1GJlmuk"
                    className="rounded-circle mx-auto d-block  position-absolute fixed-bottom "
                    style={{
                      width: "auto",

                      objectFit: "cover",
                    }}
                  />
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      marginBottom: "50px",
                    }}
                    src="https://media-exp1.licdn.com/dms/image/C5616AQGdYfRpzGqAwQ/profile-displaybackgroundimage-shrink_350_1400/0/1517866361803?e=1636588800&v=beta&t=5EI7j1zQHutematrk_wLkVWHv2T6XhDgEqLZw7TvfuI"
                    alt=""
                  />
                </Col>
                <Col className="col-12 col-sm-12 col-md-12 col-lg-12 text-center small ">
                  <p className="mb-0 font-weight-bold">Vinaykumar Kollu</p>
                  <p className="mb-0">Fullstack Developer</p>

                  <hr />
                </Col>
                <Col xs>
                  <p className="float-left small mb-0">Connections</p>
                  <p className="float-right small text-primary mb-0">36</p>
                </Col>
                <Col className="col-12">
                  <p className="float-left small font-weight-bold">
                    Grow Your Connections
                  </p>
                </Col>
                <Col xs>
                  <p className="float-left small mb-0">
                    Who viewed your profile
                  </p>
                  <p className="float-right small text-primary mb-0">65</p>
                  <br />
                  <hr />
                  <p className="mb-0 small">
                    Access exclusive tools & insights
                  </p>
                  <p className="mb-0 small">
                    <i className="bi bi-symmetry-vertical font-weight-bold"></i>{" "}
                    Try Premium for Free
                  </p>
                  <hr />
                  <p className="mb-0 small font-weight-bold">
                    <i className="bi bi-bookmark-dash"></i> My items
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* <HomeSideBarTwo /> */}
        </Col>
      </Row>
    </Container>
  );
};
export default FeedsLeftBar;
