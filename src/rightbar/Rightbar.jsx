import "./right.css";
import birthdayimg from "./gift.jpg";
import adsImage from "./birthday.jpg";
import profileOnline from "./1.jpg";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <div className="birthdayContainer">
          <img src={birthdayimg} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Haftu </b> and <b>3 other friends</b> have birthday <br />
            to day
          </span>
        </div>
        <img src={adsImage} alt="" className="rightbarAds" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ui className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profileOnline} alt="" className="onlineImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Haftu Girmay</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profileOnline} alt="" className="onlineImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Haftu Girmay</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profileOnline} alt="" className="onlineImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Haftu Girmay</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profileOnline} alt="" className="onlineImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Haftu Girmay</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profileOnline} alt="" className="onlineImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Haftu Girmay</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={profileOnline} alt="" className="onlineImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Haftu Girmay</span>
          </li>
        </ui>
      </div>
    </div>
  );
}
