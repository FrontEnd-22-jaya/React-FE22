import "../assets/css/JobVacancy.css";
import Categories from "../Components/JobVacancy/Categories";
import Recommendation from "../Components/JobVacancy/Recommendation";
import SearchBar from "../Components/JobVacancy/SearchBar";
import Navbar from "./Components/Navbar";


const JobVacancy = () => {
  return (
 <> 
    <Navbar />
    <div id="container">
      <SearchBar />
      <Categories />
      <Recommendation />
    </div></>
  );
};

export default JobVacancy;
