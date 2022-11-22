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
            <div className="profile-info">
              <div className="profile-info-left">
                <ul>
                  <li>
                    <label htmlFor="phone-number">Phone Number</label>
                    <span>123456789</span>
                  </li>
                  <li>
                    <label htmlFor="gender">Gender</label>
                    <span>Female</span>
                  </li>
                  <li>
                    <label htmlFor="birthdate">Date of Birth</label>
                    <span>22 Februari 2002</span>
                  </li>
                </ul>
              </div>
              <div className="profile-info-right">
                <ul>
                  <li>
                    <label htmlFor="city">City</label>
                    <span>Lampung</span>
                  </li>
                  <li>
                    <label htmlFor="address">Address</label>
                    <span>Jl. Raya Lampung</span>
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <span>user@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="detil-info"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
