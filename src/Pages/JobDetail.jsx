import "../assets/css/JobDetail.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const JobDetail = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isApply, setIsApply] = useState(false);

  const handleBack = () => {
    navigation(`/JobVacancy`);
  };

  const handleCancelApplied = () => {
    alert("are you sure want to cancel this job?");
  };

  const handleApply = () => {
    setIsApply(!isApply);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    console.log("succes apply");
  };

  return (
    <>
      <i
        onClick={handleBack}
        id="left-arrow"
        className="bx bx-left-arrow-alt"
      ></i>

      <div id="contParent">
        <div id="contChild">
          <div id="img-company">
            <img src="../../bx-briefcase-alt-2.svg" alt="" />
          </div>
          <div id="jobAddress">
            <h1 id="h-posisi">
              <b>Full Stack Developer</b>
            </h1>
            <div id="h-company">
              <h4 id="company">Google</h4>
              <h4 id="address">Sumedang</h4>
            </div>
          </div>

          <div id="termAndCond">
            <div id="r-exp">
              <h3 id="h-exp">EXPERIENCE</h3>
              <p id="p-exp">Minimum 1 year</p>
            </div>
            <div id="r-empl">
              <h3 id="h-empl">EMPLOYEE TYPE</h3>
              <p id="p-empl">Full time</p>
            </div>
            <div id="r-offer">
              <h3 id="h-offer">OFFER SALARY</h3>
              <p id="p-offer">9,000,000IDR/Month</p>
            </div>
          </div>

          <div id="jobDescription">
            <h2 id="h-jobDesc">
              <b>Job Description</b>
            </h2>
            <div id="descList">
              <div className="li">
                <i className="bx bx-check-circle"></i>
                <h3>Search for jobs for many category.</h3>
              </div>
              <div className="li">
                <i className="bx bx-check-circle"></i>
                <h3>Accurate information about job vacancies.</h3>
              </div>
              <div className="li">
                <i className="bx bx-check-circle"></i>
                <h3>Partner who have good prospect for the future.</h3>
              </div>
              <div className="li">
                <i className="bx bx-check-circle"></i>
                <h3>Provide 24 hour service.</h3>
              </div>
            </div>
            <div id="p-desc">
              <p className="p" align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                repudiandae veniam odio beatae iure porro nesciunt ex odit sunt
                vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cum distinctio vero libero porro nihil ipsa animi sunt vel minus
                laborum temporibus delectus similique tempore repellat.
              </p>
              <p className="p" align="justify">
                Molestiae id amet adipisci culpa voluptatum! Eos error hic
                repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Minima sint, aspernatur, saepe ut quasi asperiores esse
                unde veniam iste doloribus praesentium animi autem deserunt
                tempora impedit. Ratione quasi error nulla? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ut repudiandae veniam
                odio beatae iure porro nesciunt ex odit sunt vitae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cum distinctio vero
                libero porro nihil ipsa animi sunt vel minus laborum temporibus
                delectus similique tempore repellat, officiis harum illo soluta
                enim.
              </p>
            </div>
          </div>

          <button id="btn" onClick={handleApply}>
            {isLoading ? (
              <span id="btn-loading">wait a second...</span>
            ) : isApply ? (
              <span onClick={handleCancelApplied} id="btn-applied">
                Applied <i className="bx bxs-check-circle"></i>
              </span>
            ) : (
              <span id="btn-apply">Apply</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
