import { Row, Col, Card } from "react-bootstrap";
const Activity = () => {
  return (
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
                  className="rounded-circle"
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
                  className="rounded-square"
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
                className="rounded-square"
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
  );
};
export default Activity;
