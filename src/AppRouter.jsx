import React from "react";
import { Route, Routes } from "react-router-dom";
import JobVacancy from "./pages/JobVacancy";
import LandingPage from "./pages/LandingPage";

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
