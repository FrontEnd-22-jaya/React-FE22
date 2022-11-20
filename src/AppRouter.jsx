import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import JobVacancy from "./Pages/JobVacancy";
import LandingPage from "./Pages/LandingPage";

import JobDetail from "./Pages/JobDetail";
import Status from "./Pages/Status";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/JobVacancy" element={<JobVacancy />} />
          <Route path="/JobDetail/:id" element={<JobDetail />} />
          <Route path="/Status" element={<Status />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default AppRouter;
