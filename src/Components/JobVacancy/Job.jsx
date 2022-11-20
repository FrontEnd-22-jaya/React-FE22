import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToBookmark } from "../../Redux/Actions/action";
import { useNavigate } from "react-router-dom";

const JOB_EP = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/jobs `;

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const bookmark = useSelector((ApplyState) => ApplyState);

  async function GetDataJobs() {
    try {
      let resp = await axios.get(JOB_EP);
      setJobs(resp.data);
      setLoading(true);
      console.log(resp.data);
    } catch (e) {
      setErrors(e.message);
      console.log(e.code);
    }
  }

  useEffect(() => {
    GetDataJobs();
  }, []);

  const handleClickBookmark = () => {
    console.log("dapat cuy");
  };

  const handleDetail = (id) => {
    navigation(`/JobDetail/${id}`);
  };

  return (
    <>
      {loading ? (
        jobs.map((item) => (
          <div key={item.id} data-aos="fade-up">
            <div className="job">
              <div id="kiri">
                <div id="icon-job">
                  {/* <i className="bx bxl-facebook-circle"></i> */}
                  <img src={item.image} alt="" />
                </div>
                <div id="details">
                  <div id="detail-kiri">
                    <div id="h-detail">
                      <h4>{item.name}</h4>
                    </div>
                    <div id="name-company">
                      <p>{item.company}</p>
                    </div>
                    <div id="employee">
                      <p>{item.employee}</p>
                    </div>
                  </div>

                  <div id="detail-kanan"></div>
                </div>
              </div>{" "}
              <div id="kanan">
                <div id="parent-btn-detail" href="#">
                  <button
                    onClick={() => handleDetail(item.id)}
                    id="btn-detail"
                    name="detail"
                    value="detail"
                  >
                    view detail
                  </button>
                </div>
                <div onClick={handleClickBookmark} id="icon-save">
                  <i className="bx bx-bookmark-plus"></i>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div id="loading">
          <div className="loadingWrap">
            <i className="bx bx-loader"></i>
            <span className="loadingText">loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
