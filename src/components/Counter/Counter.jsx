import React from "react";
import { NavLink } from "react-router-dom";
import "./Counter.css";

function Counter() {
  return (
    <div className="counter__area">
      <div className="container">
        <div className="row">
          <div className="counters">
            <div className="counters__wrap">
              <div className="row">
                <div className="text">
                  <div className="single__counter wow fadeInUp">
                    <h2 className="counter">204</h2>
                    <p>Affected Countries</p>
                  </div>
                </div>
                <div className="text">
                  <div className="single__counter wow fadeInUp">
                    <h2 className="counter">1,098,848</h2>
                    <p>Confirmed Cases</p>
                  </div>
                </div>
                <div className="text">
                  <div className="single__counter ctype2 wow fadeInUp">
                    <h2 className="counter">226,106</h2>
                    <p>Recovered Cases</p>
                  </div>
                </div>
                <div className="text">
                  <div className="single__counter no__border wow fadeInUp">
                    <h2 className="counter">58,871</h2>
                    <p>Worldwide Deaths</p>
                  </div>
                </div>
                <div className="text fadeInUp">
                  <h6 className="emergency">
                    *** Updated less than 20 mins ago, Source:{" "}
                    <NavLink
                      target="_blank"
                      to={{
                        pathname:
                          "https://en.wikipedia.org/wiki/COVID-19_pandemic",
                      }}
                    >
                      Wikipedia
                    </NavLink>
                  </h6>
                </div>
              </div>
              <img
                src="assets/images/light/shape__white2.png"
                alt=""
                className="counter__bg counter__bg1"
              ></img>
              <img
                src="assets/images/light/shape__white2.png"
                alt=""
                className="counter__bg counter__bg2"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
