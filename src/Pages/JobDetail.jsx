import "../assets/css/JobDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const JobDetail = () => {
  const { id } = useParams();
  console.log(id);
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

  const JOB_EP = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/jobs `;

  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  async function GetDataJobs() {
    try {
      let resp = await axios.get(JOB_EP);
      setJobs(resp.data);
      setIsLoading(true);
      console.log(resp.data);
    } catch (e) {
      setErrors(e.message);
      console.log(e.code);
    }
  }

  useEffect(() => {
    GetDataJobs();
  }, []);

  return (
    <>
      {jobs
        .filter((data) => data.id === id)
        .map((data) => {
          return (
            <div>
              <i
                onClick={handleBack}
                id="left-arrow"
                className="bx bx-left-arrow-alt"
              ></i>
              <div id="contParent">
                <div id="contChild">
                  <div id="img-company">{data.image}</div>
                  <div id="jobAddress">
                    <h1 id="h-posisi">
                      <b>{data.name}</b>
                    </h1>
                    <div id="h-company">
                      <h4 id="company">{data.company}</h4>
                      <h4 id="address">{data.city}</h4>
                    </div>
                  </div>

                  <div id="termAndCond">
                    <div id="r-exp">
                      <h3 id="h-exp">EXPERIENCE</h3>
                      <p id="p-exp">{data.exp}</p>
                    </div>
                    <div id="r-empl">
                      <h3 id="h-empl">EMPLOYEE TYPE</h3>
                      <p id="p-empl">{data.employee}</p>
                    </div>
                    <div id="r-offer">
                      <h3 id="h-offer">OFFER SALARY</h3>
                      <p id="p-offer">{data.salary}</p>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut repudiandae veniam odio beatae iure porro nesciunt ex
                        odit sunt vitae. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Cum distinctio vero libero porro nihil
                        ipsa animi sunt vel minus laborum temporibus delectus
                        similique tempore repellat.
                      </p>
                      <p className="p" align="justify">
                        Molestiae id amet adipisci culpa voluptatum! Eos error
                        hic repudiandae. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Minima sint, aspernatur, saepe ut
                        quasi asperiores esse unde veniam iste doloribus
                        praesentium animi autem deserunt tempora impedit.
                        Ratione quasi error nulla? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut repudiandae veniam odio
                        beatae iure porro nesciunt ex odit sunt vitae. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Cum
                        distinctio vero libero porro nihil ipsa animi sunt vel
                        minus laborum temporibus delectus similique tempore
                        repellat, officiis harum illo soluta enim.
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
            </div>
          );
        })}
    </>
  );
};

export default JobDetail;
