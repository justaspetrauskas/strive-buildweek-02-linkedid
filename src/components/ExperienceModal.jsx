import Experience from "./Experience";
import "./style/ExperienceModal.css";
import { Modal, Form, Button, Col, Row, Dropdown } from "react-bootstrap";
const ExperienceModal = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title*</Form.Label>
            <Form.Control type="text" placeholder="Ex. Retail Sales Manager" />
            <Form.Text className="text-muted">
              Country-specific employment types
            </Form.Text>
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Col className="col-12">
              <p>Employment Type</p>
              <Dropdown id="btn-size">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  -
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Ex.Microsoft" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I'm currently Working here" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Ex.London" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description*</Form.Label>
            <Form.Control type="text" placeholder="Add Description" />
            <Form.Text className="text-muted">
              Country-specific employment types
            </Form.Text>
          </Form.Group>
          <Row>
            <Col className="col-4 m-2">
              <p>Starting date*</p>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Month
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="col-4 m-2">
              <p>end date*</p>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Year
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default ExperienceModal;
