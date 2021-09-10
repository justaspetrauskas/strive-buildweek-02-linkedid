import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import Single from "./SIngleExperience";
const Experience = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isModalPost, setIsModalPost] = useState(false);
  // const [isModalPut, setIsModalPut] = useState(false);

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
          data.map((d) => {
            console.log(d.area);
          });
          console.log("userInfo------->", data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col xs>
              <h5>Experience</h5>
            </Col>
            <Col xs className="col-2">
              <i
                onClick={() => setIsModalPost(!isModalPost)}
                class="bi bi-plus-lg"
                id="1"
              ></i>
            </Col>
          </Row>
          <br />
          <Row>
            {userInfo &&
              userInfo.map((exp) => (
                <>
                  <Single exp={exp} />
                </>
              ))}
          </Row>
          <hr />
        </Card.Body>
      </Card>
      {isModalPost && <ExperienceModal />}
    </>
  );
};
export default Experience;
