import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Activity from "./Activity";
import Experience from "./Experience";
import Dashboard from "./Dashboard";
const Profile = () => {
  return (
    <Container style={{ background: "#cfcfcf" }}>
      <Row>
        <Col className="col-8 p-0">
          {/* //Card1 */}
          <Card border="#575551">
            <Card.Img
              variant="top"
              src="https://media-exp1.licdn.com/dms/image/C5616AQGdYfRpzGqAwQ/profile-displaybackgroundimage-shrink_350_1400/0/1517866361803?e=1636588800&v=beta&t=5EI7j1zQHutematrk_wLkVWHv2T6XhDgEqLZw7TvfuI"
            />
            <Card.Body>
              <Row>
                <Col className="col-6 ">
                  <ul>
                    <li
                      style={{ listStyleType: "none" }}
                      className="font-weight-bold "
                    >
                      {" "}
                      VinayKumar Kollu
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      Full Stack Developer
                    </li>
                    <p>
                      Rome,Latium,Italy{" "}
                      <span className="text-info">Contact info</span>
                    </p>
                    <p className="text-info">36 Connections</p>
                    <div>
                      <Button className="mr-2" variant="primary">
                        Open To
                      </Button>
                      <Button className="mr-2" variant="light">
                        Add Section
                      </Button>
                      <Button className="mr-2" variant="light">
                        More
                      </Button>
                    </div>
                  </ul>
                </Col>
                <Col className="col-6 text-end">
                  <ul>
                    <li
                      style={{
                        listStyleType: "none",
                        padding: "5px",
                        fontSize: "small",
                      }}
                    >
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          objectFit: "cover",
                        }}
                        src="https://seotoolsguru.com/wp-content/uploads/2016/03/upwork.png"
                        alt=""
                      />
                      <span className="pr-1"></span>
                      UpWork
                    </li>
                    <li
                      style={{
                        listStyleType: "none",
                        padding: "5px",
                        fontSize: "small",
                      }}
                    >
                      <img
                        style={{
                          width: "40px",
                          height: "30px",
                          objectFit: "cover",
                        }}
                        src="https://coursera-university-assets.s3.amazonaws.com/1d/ce9cf75d005c26a645a53ab325a671/Logo-360x360-png-rosso.png"
                        alt=""
                      />
                      <span className="pr-1"></span>
                      Sapienza UNiversita di Roma
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* //Card3(About) */}
          {/* <Card>
            <Card.Body>
              <Row>
                <Col xs className="col-10">
                  <h5>About</h5>
                </Col>
                <Col xs className="col-2">
                  <i class="bi bi-pencil-fill"></i>
                </Col>
                <br />
                <Col xs>
                  <p>
                    I'm a python developer with two years of experience in
                    developing web applications using python and Django, since I
                    am a student of university, pursuing masters in computer
                    science actively looking for internships/full-time jobs to
                    become professional in python /Django
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card> */}

          <br />
          <Dashboard />

          <br />
          <Activity />
          <br />
          <Experience />
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
