import React from "react";
import { NavLink } from "react-router-dom";
import "./Cta.css";

function Cta() {
  return (
    <div className="cta__area">
      <div className="container">
        <div className="row">
          <div className="cta">
            <div className="cta__wrap">
              <div className="cta__main">
                <div className="title">
                  <h2>Test Covid-19?</h2>
                  <h4>
                    Our goal at Our World in Data is to provide testing data
                    over time for many countries around the world.
                  </h4>
                  <div className="space-30"></div>
                  <div className="btn__group">
                    <NavLink
                      to={{
                        pathname: "",
                      }}
                      className="cbtn emergency_btn"
                    >
                      Call For Test
                    </NavLink>
                    <NavLink
                      to={{
                        pathname: "",
                      }}
                      className="cbtn emergency_btn"
                    >
                      Book Doctor
                    </NavLink>
                  </div>
                </div>
              </div>
              <img
                src="assets/images/light/shape__white2.png"
                alt=""
                className="cta__img cta__img1"
              />
              <img
                src="assets/images/light/shape__white2.png"
                alt=""
                className="cta__img cta__img2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
