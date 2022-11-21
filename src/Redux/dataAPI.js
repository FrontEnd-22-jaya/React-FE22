import axios from "axios";

const [jobs, setJobs] = useState([]);
const [errors, setErrors] = useState([]);
const [loading, setLoading] = useState([false]);

const JOB_EP = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/jobs `;

const GetDataJobs = async () => {
  try {
    let resp = await axios.get(JOB_EP);
    setJobs(resp.data);
    setLoading(true);
    console.log(resp.data);
  } catch (e) {
    setErrors(e.message);
    console.log(e.message);
  }
};

export default [GetDataJobs, jobs, errors, loading];
