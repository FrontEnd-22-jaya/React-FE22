import React from "react";
import { Link } from "react-router-dom";

const Section_1 = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>FIND YOUR</h1>
        <h1>DREAM JOB HERE</h1>
        <h4>Jobsidian is a platform that provides information about job vacancies. Jobsidian offers jobs that match your abilities, both around your location and out of reach.</h4>
        <Link to="/JobVacancy">
          <button>Explore Job</button>
        </Link>
      </div>
      <div className="home-img">
        <img src="../gambar_home.png" alt="" width="600"></img>
      </div>
    </div>
  );
};

export default Section_1;
