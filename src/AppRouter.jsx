import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import JobVacancy from "./Pages/JobVacancy";
import LandingPage from "./Pages/LandingPage";

import JobDetail from "./Pages/JobDetail";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import ProfilPage from "./Pages/ProfilePage/ProfilPage";
import SavedOffers from "./Pages/ProfilePage/SavedOffers";
import UploadDocuments from "./Pages/ProfilePage/UploadDocuments";

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
          <Route path="/ProfilPage">
            <Route path="/ProfilPage/" element={<ProfilPage />} />
            <Route path="/ProfilPage/saved-offers" element={<SavedOffers />} />
            <Route path="/ProfilPage/up-doc" element={localStorage.getItem("user-info") ? <UploadDocuments /> : <Navigate replace to={"/login"} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
