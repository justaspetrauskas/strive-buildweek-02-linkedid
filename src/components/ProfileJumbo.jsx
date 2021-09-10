import "../style/ProfileJumbo.css";
import React from "react";

import { Carousel, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import { FetchMe } from "../functions/FetchMe";
import ProfileModal from "./ProfileModal";

class ProfileJumbo extends React.Component {
  state = {
    user: null,
    name: null,
    surname: null,
    loading: true,
    show: false,
  };
  fetchProfile = async () => {
    try {
      const user = await FetchMe();
      this.setState({ user: user, loading: false });
      console.log("success", this.user.user.name);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchProfile();
  };

  // handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <>
        {this.state.user && (
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
              <ProfileModal
                show={this.state.show}
                setClose={this.handleShow}
                user={this.state.user}
                fetchProfile={this.fetchProfile}
              />
              {this.state.user && (
                <div className="d-flex justify-content-between">
                  <div className="personal-info">
                    <h2>
                      {this.state.user.name} {this.state.user.surname}
                    </h2>
                    <span>{this.state.user.title}</span>
                    <span className="bio">{this.state.user.bio}</span>
                    <span className="area">{this.state.user.area}</span>
                    <div className="d-flex">
                      <span className=" text-muted email">
                        {this.state.user.email}
                      </span>
                      <a className=" personal-text-color " href="/">
                        Contact Info
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <span className="connections my-2">
                  <a
                    className="personal-info-text personal-text-color "
                    href="/"
                  >
                    100 connections
                  </a>
                </span>

                <div className="buttons-personal-info">
                  <button className="firstBtn">Open to</button>
                  <button className="secondBtn">Add section</button>
                  <button className="thirdBtn">More</button>
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
                        Share that you’re hiring and attract qualified
                        candidates. Get started
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
        )}
      </>
    );
  }
}
export default ProfileJumbo;
