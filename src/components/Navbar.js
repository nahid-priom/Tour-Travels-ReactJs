import React, { useState } from "react";
import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Tour & Travels</h1>
      <div className="menu-icons" onClick={() => handleClick()}>
        <i
          className={
            clicked ? "fa-regular fa-rectangle-xmark" : "fa-solid fa-bars"
          }
        ></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}
        <Link to="/signup">
          <button type="button">SIGN UP</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
