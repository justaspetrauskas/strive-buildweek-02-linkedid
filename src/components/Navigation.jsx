import { Container, Row } from "react-bootstrap";
import "../style/Navigation.css";
import { useState, useEffect } from "react";

// icons
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiFillHome, AiOutlineCaretDown } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
// import NavigationItem from "../components/NavigationItem";
import SearchProfile from "./SearchProfile";

const Navigation = () => {
  const [personalProfile, setPersonalProfile] = useState([]);
  const [accountSetting, openAccountSettings] = useState(true);

  const fetchMe = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1YzBiODdiZTZjMTAwMTVmOWRiOTAiLCJpYXQiOjE2MzA5MTI3NDIsImV4cCI6MTYzMjEyMjM0Mn0.byBIo7uNfJRP4-fpOCvFNWie1JMeMuhYXLce9wJEiIc",
          },
        }
      );
      if (response.ok) {
        let myProfile = await response.json();
        setPersonalProfile(myProfile);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <header class="navigation-wrapper">
      <Container>
        <Row className="top-navigation">
          <a href="" className="navigation-brand">
            <svg
              className="navigation-logo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 382 382"
              height="34"
              width="34"
            >
              <path
                d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
              />
            </svg>
          </a>
          {/* search */}
          <SearchProfile />

          <nav className="navigation-items-wrapper">
            <ul className="navigation-items">
              {/* is it possible to do something like this */}
              {/* <NavigationItem render={<AiFillHome size={24} />} /> */}
              <li className="navigation-item">
                <a href="" className="navigation-link">
                  <div className="link-icon">
                    <span>
                      <AiFillHome size={24} />
                    </span>
                  </div>
                  <span className="link-text d-none d-lg-block">Home</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="" className="navigation-link">
                  <div className="link-icon">
                    <span>
                      <IoMdPeople size={24} />
                    </span>
                  </div>
                  <span className="link-text d-none d-lg-block">
                    My Network
                  </span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="" className="navigation-link">
                  <div className="link-icon">
                    <span>
                      <MdWork size={24} />
                    </span>
                  </div>
                  <span className="link-text d-none d-lg-block">Jobs</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="" className="navigation-link">
                  <div className="link-icon">
                    <span>
                      <RiMessage3Fill size={24} />
                    </span>
                  </div>
                  <span className="link-text d-none d-lg-block">Messaging</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="" className="navigation-link">
                  <div className="link-icon">
                    <span>
                      <IoNotificationsSharp size={24} />
                    </span>
                  </div>
                  <span className="link-text d-none d-lg-block">
                    Notifications
                  </span>
                </a>
              </li>
              <li className="navigation-item">
                <button className="navigation-link" onClick>
                  <div className="link-icon link-personal-image">
                    <img src={personalProfile.image} alt="" />
                  </div>
                  <span className="link-text text-personal d-none d-lg-block">
                    Me
                    <AiOutlineCaretDown />
                  </span>
                </button>
              </li>
              <li className="navigation-item navigation-divider">
                <button className="navigation-link">
                  <div className="link-icon">
                    <span>
                      <BsGrid3X3Gap size={24} />
                    </span>
                  </div>
                  <span className="link-text text-personal d-none d-lg-block">
                    Work
                    <AiOutlineCaretDown />
                  </span>
                </button>
              </li>
              <li className="navigation-item">
                <a href="" className="navigation-link premium-link">
                  <span className="link-text d-none d-lg-block">
                    Try Premium For Free
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </header>
  );
};
export default Navigation;
