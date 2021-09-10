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
import { submitPost } from "../functions/FetchMe";
import { FcPicture, FcPhotoReel, FcPlanner, FcLandscape } from "react-icons/fc";
import { FaIndent } from "react-icons/fa";
import {  useEffect } from "react";

// class PostModal extends React.Component {
//   state = {
//     show: false,
//     loading: true,
//     userPost: null,
//     // postImage : null,
//   };

//   // fetching/Get data for 1 user
//   componentDidMount = async () => {
//     try {
//       const user = await FetchMe();
//       this.setState({ user, loading: false });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //Whe do you to do the post request?
//   // on submit, or after clickling a button
//   // you can create a function to be called everytime the submit button is clicked
//   // this function function will call the request fuction

//   handleClose = () => this.setState({ show: false });
//   handleShow = () => this.setState({ show: true });
//   // /////////////////////////////////////////////////
//   // handlerPost =  (e) => {

//   //   // this.setState({userPost: {...this.setState.userPost}})
//   // //=  (event) => this.setState({userPost : event.target.value })
//   // };

//   render() {
//     return (
//       <>
//         <Container className="mb-6 border" id="BigBox">
//           <Row>
//             <Col md={1}>
//               <img
//                 onClick={this.handleShow}
//                 className="img-fluid-post"
//                 src={this.state.loading ? "loading" : this.state.user.image}
//                 alt="profile pic"
//               />
//             </Col>
//             <Col md={3}>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Start a post "
//                     id="input"
//                     onClick={this.handleShow}
//                   />
//                 </Form.Group>
//               </Form>
//             </Col>
//           </Row>
//           <Modal show={this.state.show} onHide={this.handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>
//                 <h4> Create a post </h4>
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Row>
//                 <Col md={1}>
//                   <img
//                     onClick={this.handleShow}
//                     className="img-fluid-post text-left"
//                     src={this.state.loading ? "loading" : this.state.user.image}
//                     alt="profile pic"
//                   />
//                 </Col>
//                 <Col>
//                   <h3 className="pl-3">
//                     {this.state.loading ? "loading" : this.state.user.name}
//                     <span> </span>
//                     {this.state.loading ? "loading" : this.state.user.surname}
//                   </h3>
//                   <Dropdown className="pl-4">
//                     <Dropdown.Toggle variant="light" id="dropdown-basic">
//                       AnyOne
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                       <Dropdown.Item href="#/action-1">sth</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2">
//                         say whatt??
//                       </Dropdown.Item>
//                       <Dropdown.Item href="#/action-3">yye?</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </Col>
//               </Row>
//             </Modal.Body>
//             <Modal.Body>
//               <Form.Group className="mb-3" onSubmit={this.submitPost}>
//                 <Form.Control
//                   as="textarea"
//                   rows={20}
//                   value={this.state.userPost}
//                   placeholder="What do you want to talk about? "
//                   onChange={
//                     this.handlerPost
//                     // (e)=>this.setState({userPost : target.value})
//                   }
//                 />
//               </Form.Group>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button
//                 variant="primary"
//                 onClick={(e) => {
//                   submitPost(this.state.userPost);
//                 }}
//               >
//                 Submit
//               </Button>
//               <Button variant="primary" onClick={this.handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//           <Row>
//             <Col className="icons">
//               <FcPicture />
//             </Col>
//             <Col className="icons ">
//               {" "}
//               <FcPhotoReel />{" "}
//             </Col>{" "}
//             <Col className="icons">
//               <FcPlanner />{" "}
//             </Col>{" "}
//             <Col className="icons">
//               <FcLandscape></FcLandscape>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

// export default PostModal;

import React, { useState } from "react";


const PostModal = (props) => {
  const [enteredPost, setEnteredPost] = useState({
    text: "",
  });


  const [showPic, setShowPic] = useState([])

 
  const handlerPost = (event) => {
    setEnteredPost({ text: event.target.value });
  };

  const submitPost = async (event) => {
    event.preventDefault();

    // const dataPost =
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2NjMxYTdiZTZjMTAwMTVmOWRiZDUiLCJpYXQiOjE2MzA5NTQyNjYsImV4cCI6MTYzMjE2Mzg2Nn0.HogYsweMAQUpppsrUiwowbIdCFQ7dOSSLbEGyxsl5IQ",
          },
          body: JSON.stringify(enteredPost),
        }
      );

      if (response.ok) {
        setEnteredPost({ text: "" });
        const post = await response.json();
        const formData = new FormData();
        try {
          const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2NjMxYTdiZTZjMTAwMTVmOWRiZDUiLCJpYXQiOjE2MzA5NTQyNjYsImV4cCI6MTYzMjE2Mzg2Nn0.HogYsweMAQUpppsrUiwowbIdCFQ7dOSSLbEGyxsl5IQ",
              },
            }
          );

          if (response.ok) {
            props.fetchPosts();
          } else {
            console.log("error");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("there was an error ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile/me";

   const FetchMe = async () => {
    try {
      const response = await fetch(`${BASE_URL}	`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
        },
      });
      if (response.ok) {
        const user = await response.json();
        setShowPic(user)
  
        
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    FetchMe();
  }, []);
  

  return (    
      <div className="post-center box">
        <div className="d-flex">
           <img
              className="post-profile-img mr-2"

              id='picOK'
              src={showPic.image}

              alt=""
            />
            
          
          
          <form onSubmit={submitPost} className="w-100">
            <input
              className="post-input"
              value={enteredPost.text}
              placeholder="What do you want to talk about"
              type="text"
              name=""
              id="inputForPost"
              onChange={handlerPost}
            />{" "}
            <br />
            {/* <input
              type="file"
              onChange={(e) => setPostImage(e.target.files[0])}
            /> */}
            {/* <button type="submit"></button>  */}
          </form>
        </div>
        <div className="d-flex justify-content-between my-4">
          <div className="post-icons">
            <FcPhotoReel style={{ fontSize: "1.6rem" }} />
            <span>Photo</span>
          </div>
          <div className="post-icons ">
            <span>
              <FcPlanner style={{ fontSize: "1.6rem" }} />
            </span>
            <span>Video</span>
          </div>

          <div className="post-icons">
            <FcLandscape style={{ fontSize: "1.6rem" }} />
            <span>Event</span>
          </div>

          <div className="post-icons pr-3">
            <FaIndent style={{ fontSize: "1.6rem", color: "#fc9295"  }} />
            <span>Write article</span>
          </div>
        </div>
      </div>
     
    
  );
};

export default PostModal;
