import React from "react";
import { Outlet } from "react-router-dom";
import Copyright from "./Components/Copyright";
import Footer from "./Components/Footer";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <div className="utk-outlet">
        <Outlet />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default AppLayout;
