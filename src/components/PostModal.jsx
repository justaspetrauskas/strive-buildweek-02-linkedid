import "../style/PostModal.css";
import { FetchMe } from "../functions/FetchMe";
import { submitPost } from "../functions/FetchMe";

import { FaIndent } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { RiVideoFill, RiArrowDownSFill } from "react-icons/ri";
import { BiCalendarEvent } from "react-icons/bi";
import CreateAPost from "./CreateAPost";

import { useState, useEffect } from "react";

const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile/me";

const PostModal = (props) => {
  const [enteredPost, setEnteredPost] = useState({
    text: "",
  });

  const [postProfile, setPostProfile] = useState([]);

  const fetchMe = async () => {
    try {
      const response = await fetch(`${BASE_URL}	`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
        },
      });
      if (response.ok) {
        const user = await response.json();
        setPostProfile(user);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    fetchMe();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="share-post-wrapper">
      <div className="share-post-top">
        <div className="share-post-profile-img">
          <img src={postProfile.image} alt="" />
        </div>
        <button class="share-post-btn" onClick={handleShow}>
          <span>Start a post</span>
        </button>
        {show && (
          <CreateAPost
            showState={show}
            handleClose={handleClose}
            postProfile={postProfile}
          />
        )}
      </div>
      <div className="share-post-bottom">
        <span tabIndex="-1">
          <button className="post-option">
            <BsImage size={"22"} fill={"#70B5F9"} />
            <span>Photo</span>
          </button>
        </span>
        <span tabIndex="-1">
          <button className="post-option">
            <RiVideoFill size={"22"} fill={"#7FC15E"} />
            <span>Video</span>
          </button>
        </span>
        <span tabIndex="-1">
          <button className="post-option">
            <BiCalendarEvent size={22} fill={"#E7A33E"} />
            <span>Event</span>
          </button>
        </span>
        <span tabIndex="-1">
          <button className="post-option">
            <FaIndent size={22} fill={"#FC9295"} />
            <span>Write article</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default PostModal;
