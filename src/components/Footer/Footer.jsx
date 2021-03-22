import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="row">
          <div className="flex1">
            <NavLink
              to={{
                pathname: "",
              }}
              className="footer__logo"
            >
              by Sahil Rathee
            </NavLink>
            <div className="footer__dsec">
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a new virus. Coronavirus Kills.
              </p>
              <ul className="footer-social dinline">
                <li>
                  <NavLink
                    target="_blank"
                    className="active"
                    to={{
                      pathname: "https://www.instagram.com/rttss_sahil/",
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    target="_blank"
                    to={{
                      pathname: "https://github.com/rttss-sahil",
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    target="_blank"
                    to={{
                      pathname:
                        "https://www.linkedin.com/in/sahil-rathee-b3993116b/",
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex2">
            <h3>Usefull Links</h3>
            <ul>
              <li>
                <NavLink
                  target="_blank"
                  to={{
                    pathname:
                      "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
                  }}
                >
                  WHO Information
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to={{
                    pathname: "https://en.wikipedia.org/wiki/COVID-19_pandemic",
                  }}
                >
                  Covid-19 Wikipedia
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to={{
                    pathname:
                      "https://www.cnn.com/specials/world/coronavirus-outbreak-intl-hnk",
                  }}
                >
                  CNN News
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to={{
                    pathname: "https://www.worldometers.info/coronavirus/",
                  }}
                >
                  Worldometer Info
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex3">
            <h3>Contact Us</h3>
            <div className="single__contact">
              <div className="single__contact__icon">
                <img src="assets/images/light/phone__white.png" alt="" />
              </div>
              <NavLink
                target="_blank"
                to={{
                  pathname: "tel:9992396866",
                }}
              >
                +91-999-239-6866
              </NavLink>
            </div>
            <div className="single__contact">
              <div className="single__contact__icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p>Dwarka, New Delhi, India</p>
            </div>
            <div className="single__contact">
              <div className="single__contact__icon">
                <i className="fas fa-envelope"></i>
              </div>

              <NavLink
                target="_blank"
                to={{
                  pathname: "mailto:sahil.git@outlook.com",
                }}
              >
                sahil.git@outlook.com
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
