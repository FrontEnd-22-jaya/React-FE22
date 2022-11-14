import { Route, Routes } from "react-router-dom";
import JobVacancy from "./Pages/JobVacancy";
import LandingPage from "./Pages/LandingPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="JobVacancy" element={<JobVacancy />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
