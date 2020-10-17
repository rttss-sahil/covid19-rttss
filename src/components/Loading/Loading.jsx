import React from "react";
import "./Loading.css";

// const pics = `${process}`;
function Loading({ theme }) {
  return (
    <div className={`loading ${theme}`}>
      <img
        className="loading__loader"
        src={
          theme === "light"
            ? "/assets/images/light/big__virous.png"
            : "/assets/images/dark/preloader2.png"
        }
        alt=""
      />
    </div>
  );
}

export default Loading;
