import "../assets/css/JobVacancy.css";
import JV_Categories from "../Components/JV_Categories";
import JV_Recommendation from "../Components/JV_Recommendation";
import JV_SearchBar from "../Components/JV_SearchBar";

const JobVacancy = () => {
  return (
    <div id="container">
      {/* -------------------------------------Search-setting------------------------------------  */}

      <JV_SearchBar />

      {/* -------------------------------------Categories-setting------------------------------------  */}

      <JV_Categories />

      {/* -------------------------------------Recommendation-setting------------------------------------  */}

      <JV_Recommendation />
    </div>
  );
};

export default JobVacancy;
