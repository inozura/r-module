import React from "react";
import { useSelector } from "react-redux";
import { SearchOutlined, LinkOutlined, MailOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = () => {
  const isToggle = useSelector((state) => state.Sidebar.isToggle);
  console.log(isToggle);

  return (
    <div className={`sidebar ${isToggle ? "toggled" : ""}`}>
      <div className="top-menu d-flex flex-column justify-content-center">
        <NavLink
          to="/"
          exact
          className="menu-item d-flex flex-row py-2 px-4 text-center w-100 align-items-center"
          activeClassName="active"
        >
          <SearchOutlined style={{ fontSize: 20, marginRight: 10 }} />
          <span
            style={{
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Overview
          </span>
        </NavLink>
        <NavLink
          to="/weblink"
          className="menu-item d-flex flex-row py-2 px-4 text-center w-100 align-items-center"
        >
          <LinkOutlined style={{ fontSize: 20, marginRight: 10 }} />
          <span
            style={{
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Weblink
          </span>
        </NavLink>
        <NavLink
          to="/email"
          className="menu-item d-flex flex-row py-2 px-4 text-center w-100 align-items-center"
        >
          <MailOutlined style={{ fontSize: 20, marginRight: 10 }} />
          <span
            style={{
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Email
          </span>
        </NavLink>
      </div>
      <div className="button-menu">
        <span
          style={{
            fontWeight: 400,
            fontSize: 13,
            display: "block",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Some decoration text
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
