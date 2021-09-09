import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { ImCamera } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { RiSave3Fill, RiArrowGoBackFill } from "react-icons/ri";

import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

const ProfileModal = ({ show, setClose, user, fetchProfile }) => {
  const [currentImage, setCurrentImage] = useState(user.image);
  const [previewImageSrc, setPreviewImageSrc] = useState(null);
  const [previewImageUploaded, setPreviewImagesIsUploaded] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [success, setShowSuccess] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageUrl = URL.createObjectURL(e.target.files[0]);
      setPreviewImageSrc(imageUrl);
      setPreviewImagesIsUploaded(true);
      setImageFile(e.target.files[0]);

      e.target.onload = function (e) {
        URL.revokeObjectURL(e.target.src);
      };
    } else {
      console.log("there has been some error");
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const profile = new FormData();
    profile.append("profile", imageFile);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`,
        {
          method: "POST",
          body: profile,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
          },
        }
      );
      if (response.ok) {
        console.log("image has been sent!!");
        setShowSuccess(true);
        setClose();
        fetchProfile();
        setPreviewImagesIsUploaded(false);
        setShowSuccess(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal id="modal" show={show} onHide={setClose}>
      <Modal.Header className="profile-modal-header">
        <h3>Profile photo</h3>
      </Modal.Header>
      <button class="profile-modal-btn" onClick={setClose}>
        <AiOutlineClose size={24} />
      </button>
      <Modal.Body className="profile-modal-body">
        <div className="profile-image-container">
          <div className="profile-modal-image">
            <img
              src={previewImageSrc !== null ? previewImageSrc : currentImage}
              onClick={setClose}
            />
          </div>
          {success && (
            <div className="mt-4"> Image hass been sent succesfully </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="profile-modal-footer">
        {!previewImageUploaded ? (
          <>
            <button className="profile-modal-footer-btn">
              <FiEdit2 size={24} />
              Edit
            </button>

            <label for="file-upload" className="profile-modal-footer-btn">
              <ImCamera size={24} />
              Add Photo
            </label>
            <input
              id="file-upload"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />

            <button className="profile-modal-footer-btn">
              <BsCardImage size={24} />
              Frames
            </button>
            <button className="profile-modal-footer-btn">
              <FaTrashAlt size={24} />
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              className="profile-modal-footer-btn"
              onClick={() => {
                setPreviewImagesIsUploaded(false);
                setPreviewImageSrc(null);
              }}
            >
              <RiArrowGoBackFill size={24} />
              Go back
            </button>
            <label for="file-upload" className="profile-modal-footer-btn">
              <ImCamera size={24} />
              Change Photo
            </label>
            <input
              id="file-upload"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
            <button className="profile-modal-footer-btn" onClick={submitImage}>
              <RiSave3Fill size={24} />
              Save
            </button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};
export default ProfileModal;
