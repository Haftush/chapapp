import "./post.css";
import profileImage from "../../sidebar/3.jpg";
import { MoreVert } from "@mui/icons-material";
import like from "./like.png";
import love from "./love.jpg";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="posttopLeft">
            <img src={profileImage} alt="" className="postprofile" />
            <span className="postUsename">Haftu Girmay</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="posttopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! this is my first post</span>
          <img src={profileImage} alt="" className="postImage" />
        </div>
        <div className="postBotton">
          <div className="postBottomLeft">
            <img src={like} alt="" className="likeIcon" />
            <img src={love} alt="" className="likeIcon" />
            <span className="postlikeCounter">100k people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
