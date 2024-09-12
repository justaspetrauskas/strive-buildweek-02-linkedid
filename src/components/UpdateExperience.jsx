import Experience from "./Experience";
import "./style/UpdateExperience.css";
import { Modal, Form, Button, Col, Row, Dropdown } from "react-bootstrap";
import { useState } from "react";

import { useEffect } from "react";

const UpdateExperience = ({ editDetails }) => {
  const [dontShow, setDontShow] = useState(null);
  const [postData, setPostData] = useState({
    role: "",
    company: "",
    startDate: "",
    // endDate: "",
    description: "",
    area: "",
  });

  const deleteEx = async () => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${editDetails.user}/experiences/${editDetails._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3N2EwMGIwMWIwZDAwMTUxNjY5MjkiLCJpYXQiOjE2MzEwMjU2NjQsImV4cCI6MTYzMjIzNTI2NH0.tzYR2FdP6RUgYJhUuHg4jdc95xzSTytWW0KsAg_89x8",
          },
        }
      );
      if (resp.ok) {
        alert("Experience Deleted");
      } else {
        console.log("problem");
      }
    } catch (error) {}
  };

  const put = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${editDetails.user}/experiences/${editDetails._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM3N2EwMGIwMWIwZDAwMTUxNjY5MjkiLCJpYXQiOjE2MzEwMjU2NjQsImV4cCI6MTYzMjIzNTI2NH0.tzYR2FdP6RUgYJhUuHg4jdc95xzSTytWW0KsAg_89x8",
          },
          body: JSON.stringify(postData),
        }
      );

      if (resp.ok) {
        console.log(alert("data sent"));
      } else {
        console.log(alert("Wrong request"));
      }
    } catch (error) {
      console.log("error---->", error);
    }
  };
  // postData();

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Update Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                value={postData.role}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    role: e.target.value,
                  })
                }
                placeholder={editDetails.role}
              />
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={postData.company}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    company: e.target.value,
                  })
                }
                type="text"
                placeholder={editDetails.company}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I'm currently Working here" />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={postData.area}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    area: e.target.value,
                  })
                }
                type="text"
                placeholder={editDetails.area}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                value={postData.description}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    description: e.target.value,
                  })
                }
                placeholder={editDetails.description}
              />
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>
            <Row>
              <Col className="col-4 m-2">
                <p>Starting date*</p>
                <Form.Group className="mb-3">
                  {/* <Form.Label>1994/06/13</Form.Label> */}
                  <Form.Control
                    value={postData.startDate}
                    onChange={(e) =>
                      setPostData({
                        ...postData,
                        startDate: e.target.value,
                      })
                    }
                    type="text"
                    placeholder={editDetails.startDate}
                  />
                </Form.Group>
              </Col>
              <Col className="col-4 m-2">
                <p>end date*</p>
                <Form.Group className="mb-3">
                  {/* <Form.Label>1994/06/13</Form.Label> */}
                  <Form.Control
                    value={postData.endDate}
                    onChange={(e) =>
                      setPostData({
                        ...postData,
                        endDate: e.target.value,
                      })
                    }
                    type="text"
                    placeholder={editDetails.endDate}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={deleteEx} variant="secondary">
            Delete
          </Button>

          <Button onClick={put} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default UpdateExperience;
