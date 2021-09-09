import {
  Modal,
  Button,
  Container,
  Form,
  Col,
  Row,
  Dropdown,
} from "react-bootstrap";
import "../style/PostModal.css";
import { FetchMe } from "../functions/FetchMe";
import { FcPicture, FcPhotoReel, FcPlanner, FcLandscape } from "react-icons/fc";
import React from "react";

class PostModal extends React.Component {
  state = { show: false, loading: true };

  componentDidMount = async () => {
    try {
      const user = await FetchMe();
      this.setState({ user, loading: false });
      console.log("success", user.name);
    } catch (error) {
      console.log(error);
    }
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <Container className="mb-4 border" id="BigBox">
          <Row>
            <Col md={1}>
              <img
                onClick={this.handleShow}
                className="img-fluid-post"
                src={this.state.loading ? "loading" : this.state.user.image}
                alt="profile pic"
              />
            </Col>
            <Col md={3}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Start a post "
                    id="input"
                    onClick={this.handleShow}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4> Create a post </h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={1}>
                  <img
                    onClick={this.handleShow}
                    className="img-fluid-post text-left"
                    src={this.state.loading ? "loading" : this.state.user.image}
                    alt="profile pic"
                  />
                </Col>
                <Col>
                  <h3 className="pl-3">
                    {this.state.loading ? "loading" : this.state.user.name}
                    <span> </span>
                    {this.state.loading ? "loading" : this.state.user.surname}
                  </h3>
                  <Dropdown className="pl-4">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      AnyOne
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">sth</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        say whatt??
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">yye?</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={20}
                  placeholder="What do you want to talk about? "
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Post
              </Button>
            </Modal.Footer>
          </Modal>
          <Row>
            {" "}
            <Col className="icons">
              {" "}
              <FcPicture />{" "}
            </Col>
            <Col className="icons ">
              {" "}
              <FcPhotoReel />{" "}
            </Col>{" "}
            <Col className="icons">
              <FcPlanner />{" "}
            </Col>{" "}
            <Col className="icons">
              <FcLandscape></FcLandscape>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default PostModal;
