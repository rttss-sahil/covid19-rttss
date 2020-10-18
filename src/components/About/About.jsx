import React from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../refs/Context/Context";
import "./About.css";

function About() {
  // const leftAnimated = '';
  // const rightAnimated = '';
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className="about__area" id="about">
          <div className="container">
            <div className="row">
              <div className="about__main">
                <div className="about__left about__img fadeInLeft animated">
                  <img
                    src={
                      state.theme === "light"
                        ? "assets/images/light/about__left.png"
                        : "assets/images/dark/about__left2.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="about__right fadeInRight animated">
                  <div className="title">
                    <p className="title__top">About Covid-19</p>
                    <h2>What is Novel Coronavirus?</h2>
                    <h4>
                      Coronavirus disease (COVID-19) is an infectious disease
                      caused by a new virus. The disease causes respiratory
                      illness (like the flu) with symptoms such as a cough,
                      fever, and in more severe cases, difficulty breathing.{" "}
                      <br /> <br /> You can protect yourself by washing your
                      hands frequently, avoiding touching your face, and
                      avoiding close contact (1 meter or 3 feet) distances with
                      who are unwell.
                    </h4>
                    <NavLink
                      to={{
                        pathname:
                          "https://en.wikipedia.org/wiki/COVID-19_pandemic",
                      }}
                      className="cbtn btn1"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="about__shape about__shape1"
          />
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="about__shape about__shape2"
          />
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="about__shape about__shape3"
          />
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="about__shape about__shape4"
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default About;
