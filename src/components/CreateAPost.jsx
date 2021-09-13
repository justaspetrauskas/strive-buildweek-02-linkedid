import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { BsImage } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";

const CreateAPost = ({ handleClose, postProfile, showState }) => {
  const [postMessage, setPostMessage] = useState({
    text: "",
  });
  const [previewImageSrc, setPreviewImageSrc] = useState("");
  const [previewImageIsUploaded, setPreviewImageUploaded] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  console.log(postMessage.text);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewImageSrc(imageUrl);
      setPreviewImageUploaded(true);
      setImageFile(e.target.files[0]);

      e.target.onload = function (e) {
        URL.revokeObjectURL(e.target.src);
      };
    } else {
      console.log("there has been some error");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const postImg = new FormData();
    // postImg.append("post", imageFile);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(postMessage),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("hahaha " + (await response.json()));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={showState}
      onHide={handleClose}
      className="create-post-modal-wrapper"
    >
      <Modal.Header closeButton className="create-post-modal-header">
        <Modal.Title className="create-post-modal-title">
          Create a post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="create-post-modal-body">
        <div className="create-post-modal-body__top">
          <div className="create-post-modal-body_img share-post-profile-img">
            <img src={postProfile.image} alt="" />
          </div>
          <div className="create-post-modal-body__profile-info">
            <span>
              {postProfile.name} {postProfile.surname}
            </span>
            <button className="create-post-modal-body__profile-btn">
              <FaGlobeAmericas size={16} fill={"rgba(0,0,0,0.6)"} />
              <span>Anyone</span>
              <RiArrowDownSFill />
            </button>
          </div>
        </div>
        {previewImageSrc && (
          <div className="create-post-modal-image">
            <img src={previewImageSrc} alt="" />
          </div>
        )}

        <textarea
          placeholder="What do you want to talk about?"
          className="create-post-modal-body-input-content"
          value={postMessage.text}
          onChange={(e) => setPostMessage({ text: e.target.value })}
        ></textarea>
      </Modal.Body>
      <Modal.Footer className="create-post-modal-footer">
        <label for="file-upload" className="create-post-modal-add-img">
          <BsImage size={"20"} fill={"rgba(0, 0, 0, 0.6)"} />
          <span>Add image</span>
        </label>
        <input
          id="file-upload"
          accept="image/*"
          type="file"
          onChange={handleImageChange}
        />
        <Button
          className="create-post-modal-post-btn"
          disabled={
            postMessage.text.length > 0 || previewImageSrc.length > 0
              ? false
              : true
          }
          onClick={handleSubmit}
        >
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateAPost;
