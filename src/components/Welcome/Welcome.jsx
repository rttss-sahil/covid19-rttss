import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../refs/Context/Context";
import "./Welcome.css";

function Welcome() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className="welcome welcome1" id="home">
          <div className="container">
            <div className="row">
              <div className="welcome__left fadeInLeft animated">
                <p className="title__top">
                  <img
                    src={
                      state.theme === "light"
                        ? "assets/images/light/alert.svg"
                        : "assets/images/dark/alert2.png"
                    }
                    alt=""
                  />
                  Covid-19 Alert
                </p>
                <h1>
                  Stay Home,
                  <br />
                  save the world
                </h1>
                <h4>
                  Coronavirus disease (COVID-19) is an infectious
                  <br />
                  disease caused by a new coronavirus.
                </h4>
                <NavLink
                  className="cbtn btn1"
                  to={{
                    pathname:
                      "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
                  }}
                >
                  Guidelines by WHO
                </NavLink>
              </div>
              <div className="welcome__right welcome__shapes fadeInRight animated">
                <div className="welcome__shapes__wrap">
                  <img
                    src={
                      state.theme === "light"
                        ? "assets/images/light/hero__bg.png"
                        : "assets/images/dark/virus__group.png"
                    }
                    alt=""
                    className="welcome__shape__bg"
                  />
                  <img
                    src={
                      state.theme === "light"
                        ? "assets/images/light/hero1__people.png"
                        : "assets/images/dark/fusfus.svg"
                    }
                    alt=""
                    className="welcome__shape welcome__shapes1"
                  />
                  {state.theme === "light" && (
                    <Fragment>
                      <img
                        src="assets/images/light/big__virous.png"
                        alt=""
                        className="welcome__shape welcome__shapes2"
                      />
                      <img
                        src="assets/images/light/big__virous.png"
                        alt=""
                        className="welcome__shape welcome__shapes3"
                      />
                      <img
                        src="assets/images/light/big__virous.png"
                        alt=""
                        className="welcome__shape welcome__shapes4"
                      />
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/light/shape__white1.png"
            alt=""
            className="shape shape1"
          />
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="shape shape2"
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Welcome;
