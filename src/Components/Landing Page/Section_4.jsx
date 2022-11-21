import React from "react";
import Card from "../Sec_4/Card";

const Section_4 = () => {
  return (
    <div className="section4">
      <div className="saysJob">
        <div className="saysJob-text">
          <h3>What Job Seeker Says About Us</h3>
          <p>Various positive reviews from workers at Jobsidian</p>
        </div>
      </div>
      <div className="main-card">
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="dots">
          <div type="radio" name="dot" id="one"></div>
          <div type="radio" name="dot" id="two"></div>
          <div type="radio" name="dot" id="three"></div>
        </div>

        <div className="button">
          <label htmlFor="one" className="active one"></label>
          <label htmlFor="two" className="two"></label>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
