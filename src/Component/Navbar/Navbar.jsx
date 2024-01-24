import React from "react";
import Button from "../CommonComponent/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navWraper">
            <div className="nav__logo">
              <picture>
                <img
                  src="../src/assets/logo.png"
                  alt="../src/assets/logo.png"
                />
              </picture>
            </div>
            <div className="nav__menu">
              <ul className="menu">
                <li className="menu__item">
                  <a href="#">Services</a>
                </li>
                <li className="menu__item">
                  <a href="#">Industries</a>
                </li>
                <li className="menu__item">
                  <a href="#">About Us</a>
                </li>
                <li className="menu__item">
                  <a href="#">Team Lunar</a>
                </li>
                <li className="menu__item blog--icon">
                  <a href="#">Blog</a>
                  <MdKeyboardArrowDown className="down--arrow" />
                </li>
              </ul>

              <Button btn__style="nav__btn">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
