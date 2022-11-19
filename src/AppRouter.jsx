import { Route, Routes } from "react-router-dom";
import JobVacancy from "./Pages/JobVacancy";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="JobVacancy" element={<JobVacancy />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
