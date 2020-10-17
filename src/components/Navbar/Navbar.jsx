import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../refs/Context/Context";
import "./Navbar.css";

function Navbar() {
  const [headerClass, setHeaderClass] = useState("header__absolute"),
    [menuToggle, setMenuToggle] = useState(""),
    [navClass, setNavClass] = useState(""),
    toggleMenu = () => {
      !menuToggle ? setMenuToggle("open") : setMenuToggle("");
      !navClass ? setNavClass("open") : setNavClass("");
    };
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 0) {
        setHeaderClass("header__sticky");
      } else {
        setHeaderClass("header__absolute");
      }
    },
    { passive: true }
  );
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`header__area ${headerClass}`}>
          <div className="container">
            <div className="row">
              <div className="header__logo">
                <NavLink to="/">
                  <img
                    className="header__logo__image"
                    src={
                      state.theme === "light"
                        ? "assets/images/light/big__virous.png"
                        : "assets/images/dark/preloader2.png"
                    }
                    alt="Logo"
                  />
                  <span className={`header__logo__text ${state.theme}`}>
                    rCovid
                  </span>
                </NavLink>
              </div>

              <div className="menu">
                <div className="main__menu">
                  <div className={`stellarnav ${state.theme}`}>
                    <div
                      className={`menu__toggle ${menuToggle}`}
                      onClick={toggleMenu}
                    >
                      <span className="bars">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                  <ul className={`navclass ${navClass}`} id="scroll">
                    <li>
                      <div className="has__sub">
                        <NavLink to="#home">Home</NavLink>
                        <ul>
                          <li>
                            <NavLink
                              to="/"
                              onClick={() => state.changeTheme("light")}
                            >
                              Light Theme
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/"
                              onClick={() => state.changeTheme("dark")}
                            >
                              Dark Theme
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Navbar;
