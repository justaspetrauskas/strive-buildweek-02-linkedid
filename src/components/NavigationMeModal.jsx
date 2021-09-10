import { useEffect, useState, useRef } from "react";

const NavigationMeModal = ({ showSettings, profile, setShowSettings }) => {
  //   let [isOpen, setIsOpen] = useState(true);

  //   let modalRef = useRef();

  //   useEffect(() => {
  //     let handler = (event) => {
  //       if (!modalRef.current.contains(event.target)) {
  //         console.log(event.target);
  //         setIsOpen(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handler);

  //     return () => {
  //       document.removeEventListener("mousedown", handler);
  //     };
  //   });

  return (
    <>
      {showSettings && (
        <div
          tabIndex={0}
          className="navigation-modal-wrapper"
          onBlur={setShowSettings}
        >
          <div className="account-section-wrapper">
            <div className="account-overview">
              <div className="overview-image">
                <img src={profile.image} alt="" />
              </div>
              <div className="overview-body">
                <span className="overview-header">
                  {profile.name} {profile.surname}
                </span>
                <span className="overview-about">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, ipsum cupiditate optio itaque officia exercitationem
                </span>
              </div>
            </div>
            <button class="view-profile-btn">View Profile</button>
          </div>

          <div className="account-section-wrapper">
            <div className="settings-header">Account</div>
            <ul>
              <li>
                <a href="">Settings & Privacy</a>{" "}
              </li>
              <li>
                <a href="">Help</a>{" "}
              </li>
              <li>
                <a href="">Language</a>{" "}
              </li>
            </ul>
          </div>
          <div className="account-section-wrapper">
            <div className="settings-header">Manage</div>
            <ul>
              <li>
                <a href="">Post & Activity</a>{" "}
              </li>
              <li>
                <a href="">Job Posting Account</a>{" "}
              </li>
            </ul>
          </div>
          <div className="account-section-wrapper">
            <ul>
              <li>
                <a href="">Sign out</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMeModal;
