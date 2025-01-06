import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React from "./topbar.css";
import secondimage from "../../assets//secondimage.jpg";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Chatapp</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchbarIcon" />
          <input
            placeholder="Search for friends, posts and other"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlink">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={secondimage} alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
