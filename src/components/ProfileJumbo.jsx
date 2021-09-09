import "../style/ProfileJumbo.css";
import React from "react";

import {
  Container,
  Carousel,
  Card,
  Modal,
  Col,
  Row,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { FetchMe } from "../functions/FetchMe";

class ProfileJumbo extends React.Component {
  state = {
    name: null,
    surname: null,
    loading: true,

    show: false,


  };

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
      <div className="profile-main border mb-3 mt-4">
        <div
          className="bg-img"
          style={{
            backgroundImage: `url(https://i1.wp.com/cms.babbel.news/wp-content/uploads/2019/09/CM_MagazineHeader_10MostSpokenLanguages.png?resize=830%2C467)`,
            height: "11rem",
            objectFit: "cover",
          }}
        ></div>

        <div className="profile-info">
          <div className="rounded-img-section">
            <img
              src={this.state.loading ? "loading" : this.state.user.image}
              className="profil-rounded-img"
              style={{ height: "10rem" }}
              onClick={this.handleShow}
            />
          </div>

          <Modal id="modal" show={this.state.show} onHide={this.handleClose}>
            {/* <Modal.Header closeButton>
            
          </Modal.Header> */}
            <Modal.Body>
              <h3>
                Profile photo
                <Button variant="secondary" onClick={this.handleClose}>
                  X
                </Button>
              </h3>

              <img
                id="modalPic"
                src={this.state.loading ? "loading" : this.state.user.image}
                className="profil-rounded-img"
                style={{ height: "15rem", width: "15rem" }}
                onClick={this.handleShow}
              />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>

          <div className="d-flex justify-content-between ">
            <div className="personal-info  pb-3">

              <div></div>


              <h2>
                {this.state.loading ? "loading" : this.state.user.name}
                <span> </span>
                {this.state.loading ? "loading" : this.state.user.surname}
              </h2>

              <p>{this.state.loading ? "loading" : this.state.user.title} </p>
              <div>
                {" "}
                {this.state.loading ? "loading" : this.state.user.area}
              </div>

              <p className="text-muted personal-info-text ">
                {this.state.loading ? "loading" : this.state.user.bio}
              </p>
              <div className="d-flex">
                <p className=" text-muted personal-info-text">
                  {this.state.loading ? "loading" : this.state.user.email}
                </p>

                <p className="ml-2">
                  <a className=" personal-text-color " href="/">
                    <b> Contact Info </b>
                  </a>
                </p>
              </div>

              <div className="d-flex my-2">
                <a
                  className="mr-1 personal-info-text personal-text-color  "
                  href="/"
                ></a>
                <p className="mr-1"></p>
                <a className="personal-info-text personal-text-color " href="/">
                  <b> 100 connections</b>
                </a>
              </div>

              <div className="buttons-personal-info">
                <button className="firstBtn">Open to</button>
                <button className="secondBtn">Add section</button>
                <button className="thirdBtn">More</button>
              </div>
            </div>

            <div>
              <div className="d-flex personal-company-info "></div>
            </div>
          </div>
          <div className="caro">
            <Carousel>
              <Carousel.Item>
                <Card.Body className="carousel-card">
                  Show recruiters you're open to work - you control who sees
                  this. Get started{" "}
                </Card.Body>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Body className="carousel-card">
                    Share that you’re hiring and attract qualified candidates.
                    Get started
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Body className="carousel-card">
                    Find potential clients by showcasing the services you
                    provide. Get started
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
          {/* <TestCarousel /> */}
        </div>
      </div>
    );
  }
}
export default ProfileJumbo;
