import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../style/MainFeed.css";

import SinglePostCard from "./SinglePostCard";

const MainFeed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
          },
        }
      );
      if (response.ok) {
        let postsData = await response.json();
        console.log(postsData);
        setPosts(postsData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container className="main-feed-container">
      <Row className="test">
        <Col md={2} className="d-none d-lg-block profile">
          <div>This is a test for profile</div>
        </Col>
        <Col md={7} xs={12} className="main-feed">
          {posts.length > 0 && (
            <>
              {posts
                .slice(0, 25)
                .reverse()
                .map((post, i) => (
                  <SinglePostCard index={i} post={post} />
                ))}
            </>
          )}
        </Col>
        <Col md={3} className="d-none d-lg-block aside">
          <div> this is a test for the side container</div>
        </Col>
      </Row>
    </Container>
  );
};
export default MainFeed;
