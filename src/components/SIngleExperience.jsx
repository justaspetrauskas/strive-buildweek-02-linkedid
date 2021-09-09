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
          src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-f69e69ec-bf93-4dba-8caf-dbd3dd9f131a.svg"
          alt="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-f69e69ec-bf93-4dba-8caf-dbd3dd9f131a.svg"
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
