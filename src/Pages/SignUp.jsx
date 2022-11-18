import "../assets/css/SignUp.css";
import loginimg from "../assets/image/signup.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="Signup">
      <div className="login">
        <h4>already have an account?</h4>
        <button>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </button>
      </div>
      <div className="signup-section">
        <div className="signup-form">
          <div className="signup-title">
            <h2>Sign Up</h2>
          </div>
          <div className="signup-input">
            <div className="input-element">
              <input type="text" placeholder="email" />
            </div>
            <div className="input-element">
              <input type="text" placeholder="phone" />
            </div>
            <div className="input-element">
              <input type="text" placeholder="password" />
            </div>
            <div className="input-element">
              <input type="text" placeholder="confirm password" />
            </div>
            <div className="input-element-button">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className="signup-img">
          <img src={loginimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
