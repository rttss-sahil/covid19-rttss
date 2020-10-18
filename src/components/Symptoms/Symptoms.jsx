import React from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../refs/Context/Context";
import "./Symptoms.css";

function Symptoms() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className="symptoms__area" id="symptoms">
          <div className="container">
            <div className="row">
              <div className="symptoms__main">
                <div className="symptoms__left">
                  <img
                    src={
                      state.theme === "light"
                        ? "assets/images/light/symptoms.png"
                        : "assets/images/dark/symptoms2.svg"
                    }
                    alt=""
                    className="symptom__bg fadeInRight animated"
                  ></img>
                </div>
                <div className="symptoms__right">
                  <p className="title__top">Covid-19 Symptoms</p>
                  <h2>What are the symptoms?</h2>
                  <h4>
                    COVID-19 symptoms range from mild to severe. It takes 2-14
                    days after exposure for symptoms to develop. Symptoms may
                    include:
                  </h4>
                  <div className="symptoms__row">
                    <div className="points">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i> Hard Cough
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Fever
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Headache
                        </li>
                      </ul>
                    </div>
                    <div className="points">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i> Resoiratory Distress
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Shortness of Breath
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Kidney Failure
                        </li>
                      </ul>
                    </div>
                  </div>
                  <NavLink to="#" className="cbtn btn1">
                    Check Symptoms
                  </NavLink>
                </div>
              </div>
              <img
                src="assets/images/light/shape__white2.png"
                alt=""
                className="symptom__shape symptom_1"
              />
              <img
                src="assets/images/light/shape__white2.png"
                alt=""
                className="symptom__shape symptom_2"
              />
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Symptoms;
