import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map__area">
      <div className="container">
        <div className="row">
          <div className="map__main">
            <div className="map__left">
              <div className="title fadeInDown">
                <p className="title__top">Covid-19 Threat</p>
                <h2>More than 59k died in Covid-19</h2>
                <h4>
                  There are no medications specifically approved for
                  coronavirus. Most people with mild coronavirus :
                </h4>
              </div>
            </div>
            <div className="map__right">
              <div className="mapping zoomIn">
                <iframe
                  title="Tracker"
                  src="https://www.bing.com/covid"
                  frameBorder="0"
                ></iframe>
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
        className="prevention__img prevention__img2"
      />
      <img
        src="assets/images/light/shape__white2.png"
        alt=""
        className="prevention__img prevention__img3"
      />
    </div>
  );
}

export default Map;
