import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/61377a00b01b0d0015166929/experiences",
        {
          headers: {
            Authentication:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3N2EwMGIwMWIwZDAwMTUxNjY5MjkiLCJpYXQiOjE2MzEwMjU2NjQsImV4cCI6MTYzMjIzNTI2NH0.tzYR2FdP6RUgYJhUuHg4jdc95xzSTytWW0KsAg_89x8",
          },
        }
      );
      try {
      } catch (error) {}
    };
  }, []);
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
          {/* //Card 2(DashBoard) */}
          <br />
          <Card border="#575551" style={{ background: "#98a8b4" }}>
            <Card.Body>
              <Row pill bg="primary" border="#575551" className="px-4 m-0">
                <Col className="col-10">
                  <h5>Your Dashboard</h5>
                  <span>Private to you</span>
                </Col>
                <Col className="col-2">
                  <p>
                    <i class="bi bi-star"></i>
                    All Star
                  </p>
                </Col>
              </Row>
              <br />
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
                      <i class="bi bi-wifi"></i> <span>Creator mode :</span>Off
                      <p className="small">
                        Grow your audience and get discovered by highlighting
                        content on your profile.
                      </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <i class="bi bi-people-fill"></i> Dapibus ac facilisis in
                      <p className="small">
                        Manage your connections, events, and interests.
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i class="bi bi-bookmark-fill"></i> My Teams
                      <p className="small">
                        Keep track of your jobs, courses and articles.
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <br />
          {/* //Card3(About) */}
          <Card>
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
          </Card>
          {/* //Card4(Activity) */}
          <br />
          <Card>
            <Card.Body>
              <Row>
                <Col xs className="col-6">
                  <h5>Activity</h5>
                  <h5 style={{ fontSize: "15px", color: "#3a5599" }}>
                    101 Followers
                  </h5>
                  <Row style={{ maeginBottom: "30px" }}>
                    <Col xs className="col-4 ">
                      <img
                        class="rounded-circle"
                        src="https://media-exp1.licdn.com/dms/image/C5603AQGhp9AGnNzl6Q/profile-displayphoto-shrink_100_100/0/1517866361123?e=1635379200&v=beta&t=wpzWpKHGBMm0GVrFOyfQDrnjqao7tMLCVXEY1GJlmuk"
                        alt=""
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col xs className=" p-0">
                      <h5>Congrats!</h5>
                      <p style={{ fontSize: "15px" }}>Vinaykumar commented</p>
                    </Col>
                  </Row>
                </Col>

                <br />
                <Col xs>
                  <Row style={{ marginTop: "50px" }}>
                    <Col xs className="col-4 ">
                      <img
                        class="rounded-square"
                        src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-f69e69ec-bf93-4dba-8caf-dbd3dd9f131a.svg"
                        alt=""
                        style={{
                          width: "80px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col xs className=" p-0">
                      <h5>Certificate-VINAYKUMAR KOLLU-Strive School!</h5>
                      <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                        Vinaykumar Shared this
                      </p>
                      <p style={{ fontSize: "11px", paddingTop: "0px" }}>
                        20 Reactions
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Row>
                  <Col style={{ paddingLeft: "20px" }} xs className="col-3">
                    <img
                      class="rounded-square"
                      src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-f69e69ec-bf93-4dba-8caf-dbd3dd9f131a.svg"
                      alt=""
                      style={{
                        width: "80px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs className="col-8 p-0">
                    <h5>Certificate-VINAYKUMAR KOLLU-Strive School!</h5>
                    <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                      Vinaykumar Shared this
                    </p>
                    <p style={{ fontSize: "11px", paddingTop: "0px" }}>
                      20 Reactions
                    </p>
                  </Col>
                </Row>
              </Row>
              <hr />
              <p className="text-center">See all Activity</p>
            </Card.Body>
          </Card>
          <br />
          {/* //Card 5 (Experiance) */}
          <Card>
            <Card.Body>
              <Row>
                <Col xs>
                  <h5>Experience</h5>
                </Col>
                <Col xs className="col-2">
                  <i class="bi bi-plus-lg"></i>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs>
                  <img
                    class="rounded-square"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-f69e69ec-bf93-4dba-8caf-dbd3dd9f131a.svg"
                    alt=""
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs className="col-8">
                  <h5>Web Developer</h5>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                    Upwork Freelance
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                    Jan 2021 – Present : 9 mnts
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>India</p>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                    I’m a full stack web developer can able to code front and
                    back end parts of website.
                    <hr />
                  </p>
                </Col>
                <Col xs className="col-2">
                  <i class="bi bi-pencil-fill"></i>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <img
                    class="rounded-square"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-f69e69ec-bf93-4dba-8caf-dbd3dd9f131a.svg"
                    alt=""
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs className="col-8">
                  <h5>Django Developer</h5>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                    Possibility Technologies . Full-Time
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                    sep 2020 - jan 2021 : 5 mnts
                  </p>
                  <p style={{ fontSize: "14px", marginBottom: "0px" }}>
                    Hyderabad,India
                  </p>
                </Col>
                <Col xs className="col-2">
                  <i class="bi bi-pencil-fill"></i>
                </Col>
              </Row>
              <hr />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
