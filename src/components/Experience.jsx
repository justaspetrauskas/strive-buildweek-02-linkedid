import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
const Experience = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/61377a00b01b0d0015166929/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3N2EwMGIwMWIwZDAwMTUxNjY5MjkiLCJpYXQiOjE2MzEwMjU2NjQsImV4cCI6MTYzMjIzNTI2NH0.tzYR2FdP6RUgYJhUuHg4jdc95xzSTytWW0KsAg_89x8",
          },
        }
      );

      try {
        if (responce.ok) {
          const data = await responce.json();
          setUserInfo(data);
          console.log("userInfo------->", data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs>
            <h5>Experience</h5>
          </Col>
          <Col xs className="col-2">
            <i classclass="bi bi-plus-lg"></i>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs>
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
          <Col xs className="col-8">
            <h5>{userInfo[0]?.role}</h5>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {userInfo[0]?.company}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              Jan 2021 – {userInfo[0]?.endDate}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {userInfo[0]?.area}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {userInfo[0]?.description}
              <hr />
            </p>
          </Col>
          <Col xs className="col-2">
            <i className="bi bi-pencil-fill"></i>
          </Col>
        </Row>
        <Row>
          <Col xs>
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
          <Col xs className="col-8">
            <h5>{userInfo[1]?.role}</h5>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {userInfo[1]?.company}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              sep 2020 - {userInfo[1]?.endDate}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {userInfo[1]?.area}
            </p>
            <p style={{ fontSize: "14px", marginBottom: "0px" }}>
              {userInfo[1]?.description}
              <hr />
            </p>
          </Col>
          <Col xs className="col-2">
            <i className="bi bi-pencil-fill"></i>
          </Col>
        </Row>
        <hr />
      </Card.Body>
    </Card>
  );
};
export default Experience;
