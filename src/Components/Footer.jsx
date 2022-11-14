import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="f-about">
        <h3 id="h-footer">About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          expedita nihil facere assumenda eos ea dolor excepturi nulla libero
          quaerat explicabo eveniet tenetur maiores.
        </p>
      </div>
      <div id="f-link">
        <h3 id="h-footer">Link</h3>
        <ul>
          <li className="li-footer">
            <a href="">Home</a>
          </li>
          <li className="li-footer">
            <a href="#jobVacancy">Job Vacancy</a>
          </li>
          <li className="li-footer">
            <a href="">Status</a>
          </li>
          <li className="li-footer">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div id="f-contact">
        <h3 id="h-footer">Contact us</h3>
        <p className="p-footer">081356747675</p>
        <p className="p-footer">jobsidian@gmail.com</p>
        <div id="sosmed">
          <a href="">
            <i className="ssmd bx bxl-instagram-alt"></i>
          </a>
          <a href="">
            <i className="ssmd bx bxl-facebook-circle"></i>
          </a>
          <a href="">
            <i className="ssmd bx bxl-github"></i>
          </a>
          <a href="">
            <i className="ssmd bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
