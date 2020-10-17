import React from "react";
import ThemeContext from "../refs/Context/Context";
import "./Loading.css";

function Loading() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`loading ${state.theme}`}>
          <img
            className="loading__loader"
            src={
              state.theme === "light"
                ? "/assets/images/light/big__virous.png"
                : "/assets/images/dark/preloader2.png"
            }
            alt=""
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Loading;
