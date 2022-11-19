import "../assets/css/JobVacancy.css";
import Categories from "../Components/JobVacancy/Categories";
import Recommendation from "../Components/JobVacancy/Recommendation";
import SearchBar from "../Components/JobVacancy/SearchBar";

const JobVacancy = () => {
  return (
    <div id="container">
      <SearchBar />
      <Categories />
      <Recommendation />
    </div>
  );
};

export default JobVacancy;
