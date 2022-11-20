import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));

  function logOut() {
    localStorage.clear();
    window.location.href = "/JobVacancy";
  }
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
          <Link to="/Status">Status</Link>
        </li>
        {/* <li>
          <a href="">Contact Us</a>
        </li> */}
      </ul>
      {localStorage.getItem("user-info") ? (
        <>
          <div className="section-right">
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
            <div className="logout-btn">
              <button>
                <span onClick={logOut}>Logout</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="login-btn">
            <Link to="/login">
              <button>
                <span>Login</span>
              </button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
