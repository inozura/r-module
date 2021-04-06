import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Sidebar } from "../../components";

import "./MainContent.scss";

const MainContent = ({ children }) => {
  const isToggle = useSelector((state) => state.Sidebar.isToggle);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={`main-content ${isToggle ? "toggled" : ""}`}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default MainContent;
