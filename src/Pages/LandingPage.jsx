import "../assets/css/LandingPage.css";
import Section_1 from "../Components/Landing Page/Section_1";
import Section_2 from "../Components/Landing Page/Section_2";
import Section_3 from "../Components/Landing Page/Section_3";
import Section_4 from "../Components/Landing Page/Section_4";
import Section_5 from "../Components/Landing Page/Section_5";
import Section_6 from "../Components/Landing Page/Section_6";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <div className="LandingPage">

      <Navbar />

      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_6 />
      <Section_4 />
      <Section_5 />

      <img src="../namagambar" alt="" />
    </div>
  );
};

export default LandingPage;
