import "../assets/css/LandingPage.css";
import "../assets/css/Btn_toUp.css";
import Btn_toUp from "../Components/Landing Page/Btn_toUp";
import Section_1 from "../Components/Landing Page/Section_1";
import Section_2 from "../Components/Landing Page/Section_2";
import Section_3 from "../Components/Landing Page/Section_3";
import Section_4 from "../Components/Landing Page/Section_4";
import Section_5 from "../Components/Landing Page/Section_5";
import Section_6 from "../Components/Landing Page/Section_6";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div id="sec1" className="LP_wrap">
        <Section_1 />
        <Section_2 />

        <img src="../namagambar" alt="" />
      </div>
      <a href="#sec1">
        <Btn_toUp />
      </a>
      <div className="LP_wrap">
        <Section_3 />
        <Section_6 />
        <Section_4 />
        <Section_5 />
      </div>
    </>
  );
};

export default LandingPage;
