import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../refs/Context/Context";
import "./Navbar.css";

function Navbar() {
  const [headerClass, setHeaderClass] = useState(""),
    [menuToggle, setMenuToggle] = useState(""),
    [navClass, setNavClass] = useState(""),
    [ddToggle1, setDdToggle1] = useState(""),
    [ddToggleList1, setDdToggleList1] = useState(""),
    [ddToggle2, setDdToggle2] = useState(""),
    [ddToggleList2, setDdToggleList2] = useState(""),
    toggleMenu = () => {
      !menuToggle ? setMenuToggle("open") : setMenuToggle("");
      !navClass ? setNavClass("open") : setNavClass("");
    },
    ddToggleHandler1 = () => {
      !ddToggle1 ? setDdToggle1("close") : setDdToggle1("");
      !ddToggleList1 ? setDdToggleList1("open") : setDdToggleList1("");
    },
    ddToggleHandler2 = () => {
      !ddToggle2 ? setDdToggle2("close") : setDdToggle2("");
      !ddToggleList2 ? setDdToggleList2("open") : setDdToggleList2("");
    };
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 0) {
        setHeaderClass("header__sticky");
      } else {
        setHeaderClass("");
      }
    },
    { passive: true }
  );
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`header__area header__absolute ${headerClass}`}>
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
                    <ul className={`navclass ${navClass}`} id="scroll">
                      <li>
                        <div className="has__sub">
                          <NavLink to="#home">Home</NavLink>
                          <NavLink
                            to=""
                            className={`dd__toggle ${ddToggle1}`}
                            onClick={ddToggleHandler1}
                          >
                            <div className="icon__plus"></div>
                          </NavLink>
                          <ul className={`${ddToggleList1}`}>
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
                      <li>
                        <NavLink to="#about">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="#contagion">Contagion</NavLink>
                      </li>
                      <li>
                        <NavLink to="#symptoms">Symptoms</NavLink>
                      </li>
                      <li>
                        <NavLink to="#blog">Blog</NavLink>
                        <NavLink
                          className={`dd__toggle ${ddToggle2}`}
                          to="/"
                          onClick={ddToggleHandler2}
                        >
                          <div className="icon__plus"></div>
                        </NavLink>
                        <ul className={ddToggleList2}>
                          <li>
                            <NavLink to="/blog">Blog</NavLink>
                          </li>
                          <li>
                            <NavLink to="/single">Blog details</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="#prevention">Prevention</NavLink>
                      </li>
                    </ul>
                  </div>
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
