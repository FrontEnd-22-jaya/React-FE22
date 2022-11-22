import "../../assets/css/ProfilPage.css";
import pfp from "../../assets/image/pfp.jpeg";

import React from "react";
import Navbar from "../../Components/Navbar";

import ProfileMenu from "../../Components/ProfilePage/ProfileMenu";

const ProfilPage = () => {
  return (
    <>
      <Navbar />
      <div className="ProfilPage">
        <div className="profile-menu">
          <ProfileMenu />
        </div>
        <div className="profile-container">
          <div className="profile-box">
            <div className="edit-profile">
              <span>Edit Profile</span>
            </div>
            <div className="profile-show">
              <img src={pfp} alt="" />
              <span>Nama User</span>
            </div>
            <div className="profile-info"></div>
            <div className="detil-info"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
