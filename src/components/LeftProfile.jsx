// import "../style/LeftProfile.css";
import { FcEngineering } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { FetchMe } from "../functions/FetchMe";
import React from "react";

class LeftProfile extends React.Component {
  state = {
    name: null,
    surname: null,
    loading: true,
    show: false,
  };

  componentDidMount = async () => {
    try {
      const user = await FetchMe();
      this.setState({ user, loading: false });
      console.log("success", user.name);
    } catch (error) {
      console.log(error);
    }
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <div id="profile-home-div" className="overflow-hidden border">
          <div
            className="position-relative"
            style={{
              backgroundImage: `url(https://i1.wp.com/cms.babbel.news/wp-content/uploads/2019/09/CM_MagazineHeader_10MostSpokenLanguages.png?resize=830%2C467)`,
              height: "8rem",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          >
            <a>
              <div className="profile-pic overflow-hidden position-absolute">
                <img
                  className="img-fluid"
                  src={this.state.loading ? "loading" : this.state.user.image}
                  alt="profile pic"
                />
              </div>
            </a>
          </div>
          <div className="name-title border-bottom text-center  pb-2 px-2">
            <a>
              <h6 id="name">
                {this.state.loading ? "loading" : this.state.user.name}
                <span> </span>
                {this.state.loading ? "loading" : this.state.user.surname}
              </h6>
            </a>
            <p className="text-muted">
              {" "}
              {this.state.loading ? "loading" : this.state.user.title}
            </p>
            <div> {this.state.loading ? "loading" : this.state.user.area}</div>
          </div>
          <div className="views border-bottom py-2">
            <div className="text-muted d-flex justify-content-between px-2 mb-1">
              <span>Connections</span>
              <span className="quantity">0</span>
            </div>
            <div className="text-muted d-flex px-2 mt-0">
              <div>
                <b> Grow your network </b>
              </div>
            </div>
            <div className="text-muted d-flex justify-content-between pl-2 px-2 my-3">
              <span>Who viewed your profile</span>{" "}
              <span className="quantity">55</span>
            </div>
          </div>
          <div className="premium border-bottom p-2">
            <span className="text-muted mt-2 mb-1">
              Access exclusive tools & insight
            </span>{" "}
            <br />
            <span className="font-weight-bold">
              <span className="icon mr-1 mt-2">
                <FcEngineering />
              </span>
              Try Premium for free
            </span>
          </div>
          <div className="my-items p-2">
            <span className="font-weight-bold">
              <span className="icon text-muted mr-1 mb-1">
                <FaBookmark />
              </span>
              My Items
            </span>
          </div>
        </div>

        <div id="profile-home-div" className="overflow-hidden border mt-3">
          <div className="premium  p-2">
            <br />
            <span className="font-weight-bold p-1 group" >
              Groups
            </span>
          </div>
          <div className="my-items p-2">
            <span className="font-weight-bold p-1 group">
              
              Events +
            </span>
          </div>
          <div className="my-items p-2">
            <span className="font-weight-bold group p-1">
            
              Followed Hastags
            </span>
          </div>
          <div className="premium border-top p-2">
            <br />
            <span className="font-weight-bold   discover">Discover more </span>
          </div>
        </div>
      </>
    );
  }
}

export default LeftProfile;
