import { Route, Routes } from "react-router-dom";
import JobVacancy from "./Pages/JobVacancy";
import LandingPage from "./Pages/LandingPage";
import JobDetail from "./Pages/JobDetail";
import Status from "./Pages/Status";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/JobVacancy" element={<JobVacancy />} />
        <Route path="/JobDetail/:id" element={<JobDetail />} />
        <Route path="/Status" element={<Status />} />
      </Routes>
    </>
  );
};

export default AppRouter;
