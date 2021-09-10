import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import UpdateExperience from "./UpdateExperience";
const Single = ({ exp }) => {
  const [putModel, setPutModel] = useState(false);
  return (
    <>
      <Col xs>
        <img
          className="rounded-square"
          src={exp.image}
          alt=""
          style={{
            width: "80px",
            height: "60px",
            objectFit: "cover",
          }}
        />
      </Col>
      <Col xs className="col-8 ">
        <h5>{exp.role}</h5>
        <p style={{ fontSize: "14px", marginBottom: "0px" }}>{exp.company}</p>
        <p style={{ fontSize: "14px", marginBottom: "0px" }}>
          Jan 2021 – {exp.endDate}
        </p>
        <p style={{ fontSize: "14px", marginBottom: "0px" }}>{exp.area}</p>
        <p style={{ fontSize: "14px", marginBottom: "0px" }}>
          {exp.description}
          <hr />
        </p>
      </Col>
      <Col xs>
        <i
          onClick={() => setPutModel(!putModel)}
          className="bi bi-pencil-fill"
        ></i>
      </Col>
      {putModel && <UpdateExperience editDetails={exp} />}
    </>
  );
};
export default Single;
