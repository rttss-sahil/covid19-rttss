import React from "react";
import ThemeContext from "../refs/Context/Context";
import "./Prevention.css";

function Prevention() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className="preventions__area" id="prevention">
          <div className="container">
            <div className="row">
              <div className="prevention__main">
                <div className="prevention__left">
                  <div className="title fadeInDown">
                    <p className="title__top">Covid-19 Preventions</p>
                    <h2>How to protect yourself from Covid-19?</h2>
                    <h4>
                      If you are traveling overseas, <br />
                      follow the CDC’s guidance:{" "}
                    </h4>
                  </div>
                </div>
                <div className="prevention__right">
                  <div className="prevention__right__left">
                    <div className="do__lists">
                      <h2 className="should__do fadeInUp">
                        What you <span>should do:</span>
                      </h2>
                      <div className="single__list wow fadeInUp">
                        <div className="single__list__icon">
                          <img
                            src={
                              state.theme === "light"
                                ? "assets/images/light/service1.png"
                                : "assets/images/dark/service21.png"
                            }
                            alt=""
                          />
                        </div>
                        <h3>Wear Face Mask</h3>
                        <p>
                          Wash hands often with soap and water. If not
                          available, use hand sanitizer.
                        </p>
                      </div>
                      <div className="single__list wow fadeInUp">
                        <div className="single__list__icon">
                          <img
                            src={
                              state.theme === "light"
                                ? "assets/images/light/service2.png"
                                : "assets/images/dark/service22.png"
                            }
                            alt=""
                          />
                        </div>
                        <h3>Cover Face When Coughing</h3>
                        <p>
                          Cover your mouth/nose with a tissue or sleeve when
                          coughing or sneezing.
                        </p>
                      </div>
                      <div className="single__list wow fadeInUp">
                        <div className="single__list__icon">
                          <img
                            src={
                              state.theme === "light"
                                ? "assets/images/light/service3.png"
                                : "assets/images/dark/service23.png"
                            }
                            alt=""
                          />
                        </div>
                        <h3>Wash Your Hand Frequently</h3>
                        <p>
                          Wash hands often with soap and water. If not
                          available, use hand sanitizer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prevention__right__right">
                    <div className="do__lists">
                      <h2 className="should__dont wow fadeInUp">
                        What you <span>shouldn’t do:</span>
                      </h2>
                      <div className="single__list wow fadeInUp">
                        <div className="single__list__icon">
                          <img
                            src={
                              state.theme === "light"
                                ? "assets/images/light/service4.png"
                                : "assets/images/dark/service24.png"
                            }
                            alt=""
                          />
                        </div>
                        <h3>Avoid Animal Contact</h3>
                        <p>
                          Wash hands often with soap and water. If not
                          available, use hand sanitizer.
                        </p>
                      </div>
                      <div className="single__list wow fadeInUp">
                        <div className="single__list__icon">
                          <img
                            src={
                              state.theme === "light"
                                ? "assets/images/light/service5.png"
                                : "assets/images/dark/service25.png"
                            }
                            alt=""
                          />
                        </div>
                        <h3>Avoid Markets and Crowd</h3>
                        <p>
                          Cover your mouth/nose with a tissue or sleeve when
                          coughing or sneezing.
                        </p>
                      </div>
                      <div className="single__list wow fadeInUp">
                        <div className="single__list__icon">
                          <img
                            src={
                              state.theme === "light"
                                ? "assets/images/light/service6.png"
                                : "assets/images/dark/service26.png"
                            }
                            alt=""
                          />
                        </div>
                        <h3>Seek Medical Care from Professional</h3>
                        <p>
                          Wash hands often with soap and water. If not
                          available, use hand sanitizer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="prevention__img prevention__img1"
          />
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="prevention__img prevention__img1"
          />
          <img
            src="assets/images/light/shape__white2.png"
            alt=""
            className="prevention__img prevention__img1"
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Prevention;
