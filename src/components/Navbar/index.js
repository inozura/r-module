import React from "react";
import { useDispatch } from "react-redux";
import { MenuOutlined, EllipsisOutlined } from "@ant-design/icons";
import { toggleMenu } from "../../configs/store/action";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      <div className="left-nav d-flex justify-content-center align-items-center">
        <MenuOutlined
          size={90}
          className="menuHover"
          onClick={() => dispatch(toggleMenu())}
        />
      </div>
      <div className="right-nav d-flex justify-content-center align-items-center">
        <EllipsisOutlined size={30} />
      </div>
    </header>
  );
};

export default Navbar;
