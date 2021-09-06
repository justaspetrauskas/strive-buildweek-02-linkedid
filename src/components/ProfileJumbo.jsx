import "../style/ProfileJumbo.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";

const ProfileJumbo = () => {
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
            src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
            className="profil-rounded-img"
            style={{ height: "10rem" }}
          />
        </div>

        <div className="d-flex justify-content-between ">
          <div className="personal-info  pb-3">
            <h2> NAME + SURNAME </h2>

            <p>description</p>

            <p className="text-muted personal-info-text ">
              Living Area, short summary about user 
            </p>
            <div className="d-flex">
              <p className=" text-muted personal-info-text">sdfgdfgdf</p>

              <p className="ml-2">
                <a className=" personal-text-color " href="/">
                  Contact Info
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
                100 connections
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
        <div>
          
          <Carousel
          //   activeIndex={index} onSelect={handleSelect}
          >
            <Carousel.Item>
              <Card>
                <Card.Body className="carousel-card">
                  text first slide.
                </Card.Body>
              </Card>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body className="carousel-card">text 2 slide</Card.Body>
              </Card>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body className="carousel-card">text 3 slide</Card.Body>
              </Card>

              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProfileJumbo;
