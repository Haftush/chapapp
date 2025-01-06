import "./share.css";
import shareimage from "../../assets/wedding.jpg";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={shareimage} alt="" className="shareprofileImg" />
          <input placeholder="what is in your mind" className="shareInput" />
        </div>
        <hr className="sharehr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="sharemediaIcon" />
              <span className="sharetext">Photo/ Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="sharemediaIcon" />
              <span className="sharetext">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="sharemediaIcon" />
              <span className="sharetext"> Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="sharemediaIcon" />
              <span className="sharetext">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
