import React from "react";
import { NavLink } from "react-router-dom";
import "./Contagion.css";

function Contagion() {
  return (
    <div className="contagion" id="contagion">
      <div className="container">
        <div className="row">
          <div className="contagion__main">
            <div className="contagion__left">
              <div className="contagion__left__left">
                <div className="single__contagion fadeInUp animated">
                  <div className="contagion__icon">
                    <img src="assets/images/light/contagion1.png" alt="" />
                  </div>
                  <h3>Animal contact</h3>
                  <p>
                    Stay at home if you begin to feel unwell, even with mild
                    symptoms nose.
                  </p>
                </div>
                <div className="single__contagion wow fadeInUp">
                  <div className="contagion__icon">
                    <img src="assets/images/light/contagion2.png" alt="" />
                  </div>
                  <h3>Personal Contact</h3>
                  <p>
                    Avoiding contact with others and visits to medical
                    facilities will allow.
                  </p>
                </div>
              </div>
              <div className="contagion__left__right">
                <div className="single__contagion mt-lg-5 wow fadeInUp">
                  <div className="contagion__icon">
                    <img src="assets/images/light/contagion3.png" alt="" />
                  </div>
                  <h3>Air Transmission</h3>
                  <p>
                    Via respiratory droplets produced when infected person
                    coughs or sneezes.
                  </p>
                </div>
                <div className="single__contagion wow fadeInUp">
                  <div className="contagion__icon">
                    <img src="assets/images/light/contagion4.png" alt="" />
                  </div>
                  <h3>Contaminate Object </h3>
                  <p>
                    Call in advance and tell your provider of any recent travel
                    or contact.
                  </p>
                </div>
              </div>
            </div>
            <div className="contagion__right">
              <div className="title fadeInRight animated">
                <p className="title__top">Covid-19 Contagion</p>
                <h2>How does novel coronavirus spread?</h2>
                <h4>
                  Health experts are still learning the details. Currently, it
                  is thought to spread:
                </h4>
                <div className="points">
                  <ul>
                    <li>
                      <i className="fas fa-check"></i> Via respiratory droplets
                      produced when an infected person coughs or sneezes.
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Between people who are in
                      close contact with one another (within about 6 feet).
                    </li>
                  </ul>
                  <NavLink
                    to={{
                      pathname: "",
                    }}
                    class="cbtn btn1"
                  >
                    How to Prevent
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/images/light/shape__white2.png"
        alt=""
        className="contagion__img contagion__img1"
      />
      <img
        src="assets/images/light/shape__white2.png"
        alt=""
        className="contagion__img contagion__img2"
      />{" "}
      <img
        src="assets/images/light/shape__white2.png"
        alt=""
        className="contagion__img contagion__img3"
      />
    </div>
  );
}

export default Contagion;
