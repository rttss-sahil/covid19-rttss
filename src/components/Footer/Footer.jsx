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
                by NavLink new virus. The disease causes.
              </p>
              <ul className="footer-social dinline">
                <li>
                  <NavLink
                    className="active"
                    to={{
                      pathname: "",
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: "",
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: "",
                    }}
                  >
                    <i className="fab fa-twitter"></i>
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
                  to={{
                    pathname: "",
                  }}
                >
                  WHO Information
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "",
                  }}
                >
                  Covid-19 Wikipedia
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "",
                  }}
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "",
                  }}
                >
                  CNN News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "",
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
              <p>Mohakhali, Dhaka-1212</p>
            </div>
            <div className="single__contact">
              <div className="single__contact__icon">
                <i className="fas fa-envelope"></i>
              </div>
              <NavLink
                to={{
                  pathname: "mailto:director@iedcr.gov.bd",
                }}
              >
                director@iedcr.gov.bd
              </NavLink>
              <NavLink
                to={{
                  pathname: "mailto:director@iedcr.gov.bd",
                }}
              >
                iedcrit@gmail.com
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
