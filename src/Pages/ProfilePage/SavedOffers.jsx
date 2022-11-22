import React from "react";
import Navbar from "../../Components/Navbar";
import ProfileMenu from "../../Components/ProfilePage/ProfileMenu";

const SavedOffers = () => {
  return (
    <>
      <Navbar />
      <div className="ProfilPage">
        <div className="profile-menu">
          <ProfileMenu />
        </div>
        <div className="profile-container">
          <div className="profile-box">saved offers</div>
        </div>
      </div>
    </>
  );
};

export default SavedOffers;
