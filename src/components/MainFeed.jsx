import { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";

const MainFeed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    try {
      let response = fetch(
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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Col md={7} xs={12}>
        {posts.length > 0 && <div> kjashdkfa</div>}
      </Col>
    </Container>
  );
};
export default MainFeed;
