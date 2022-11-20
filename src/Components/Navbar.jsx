import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav id="sticky">
      <div id="logo">
        <h3>JOBSIDIAN</h3>
      </div>
      <ul id="page">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobVacancy">Job Vacancy</Link>
        </li>
        <li>
          <a href="">Status</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <div id="profile">
        <h4 id="nameProfile">
          <i> Users</i>
        </h4>
        <div id="iconProfile">
          <a href="">
            <i className="bx bxs-user-circle"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
