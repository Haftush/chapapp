import {
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import "./sidebar.css";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ui className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarItemtext">Feed</span>
          </li>
          <li className="sidebarListitem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarItemtext">Video</span>
          </li>

          <li className="sidebarListitem">
            <Chat className="sidebarIcon" />
            <span className="sidebarItemtext">Chat</span>
          </li>
          <li className="sidebarListitem">
            <Group className="sidebarIcon" />
            <span className="sidebarItemtext">Group</span>
          </li>
          <li className="sidebarListitem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarItemtext">Questions</span>
          </li>
          <li className="sidebarListitem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarItemtext">Jobs</span>
          </li>
          <li className="sidebarListitem">
            <Event className="sidebarIcon" />
            <span className="sidebarItemtext">Events</span>
          </li>

          <li className="sidebarListitem">
            <School className="sidebarIcon" />
            <span className="sidebarItemtext">Courses</span>
          </li>
        </ui>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ui className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src={image1} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image2} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image2} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image2} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image2} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image1} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image3} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image1} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image3} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
          <li className="sidebarFriend">
            <img src={image3} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Haftu Girmay</span>
          </li>
        </ui>
      </div>
    </div>
  );
}
