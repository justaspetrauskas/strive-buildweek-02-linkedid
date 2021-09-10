import moment from "moment";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardLine, RiSendPlaneFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const SinglePostCard = ({ index, post }) => {
  return (
    <div className="feed-post-card" key={index}>
      <div className="feed-post-header">
        <h6>This is the header</h6>
      </div>
      <button className="post-header-btn">
        <BsThreeDots size={24} />
      </button>
      <div className="feed-post-profile">
        <div className="post-profile-avatar">
          <img src={post.user.image} alt="profile avatar" />
        </div>
        <div className="post-profile-info">
          {/* here should be a link to a profile */}
          <span className="post-user-name">
            {post.user.name} {post.user.surname}
          </span>
          <span className="post-user-title">{post.user.title}</span>
          <span className="post-user-created">
            {moment(
              `${new Date(post.createdAt).getFullYear()}${
                new Date(post.createdAt).getMonth() + 1
              }${new Date(post.createdAt).getDate()}`,
              "YYYYMMDD"
            ).fromNow()}
          </span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.text}</p>
      </div>
      <div className="feed-social-media">
        <ul className="social-media-reactions">{/* <li>some icon</li> */}</ul>
        <ul className="social-media-actions">
          <li>
            <button class="social-media-action like-btn">
              <div className="like-btn-inner">
                <div className="reaction-box">
                  <ul>
                    <li class="like" data-hover="Like"></li>
                    <li class="celebrate" data-hover="Celebrate"></li>
                    <li class="support" data-hover="Support"></li>
                    <li class="love" data-hover="Love"></li>
                    <li class="insightful" data-hover="Insightful"></li>
                    <li class="curious" data-hover="Curious"></li>
                  </ul>
                </div>
              </div>
              <AiOutlineLike size={24} />
              <span className="d-none d-lg-block">Like</span>
            </button>
          </li>
          <li>
            <button class="social-media-action">
              <FaRegCommentDots size={24} />
              <span className="d-none d-lg-block">Comment</span>
            </button>
          </li>
          <li>
            <button class="social-media-action">
              <RiShareForwardLine size={24} />
              <span className="d-none d-lg-block">Share</span>
            </button>
          </li>
          <li>
            <button class="social-media-action">
              <RiSendPlaneFill size={24} />
              <span className="d-none d-lg-block">Send</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SinglePostCard;
