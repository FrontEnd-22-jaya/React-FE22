import React from "react";
import { Link } from "react-router-dom";

const Section_6 = () => {
  return (
    <div className="dropCv">
      <div className="dropCv-text">
        <h3>Drop Your CV Get Hired</h3>

        <p>Upload your CV to get the best job according to your abilities. Increase your experience and reach your dreams as high as the sky at Jobsidian.</p>
        <Link to="/ProfilPage/up-doc">
          <button>Drop CV</button>
        </Link>
      </div>
      <div className="dropCv-img">
        <img src="cv.png" alt="" width="600"></img>
      </div>
    </div>
  );
};

export default Section_6;
