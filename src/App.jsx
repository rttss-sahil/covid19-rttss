import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ThemeContext from "./components/refs/Context/Context";

import "./Animate.css";
import "./FontAwesome.css";

function App() {
  const [state, setState] = useState({
    theme: localStorage.theme || "light",
    changeTheme: (theme) => {
      document.head.querySelector("link").href =
        theme === "light"
          ? "/assets/images/light/logo.png"
          : "/assets/images/dark/preloader2.png";
      setState({
        ...state,
        theme,
      });
    },
  });

  useEffect(() => {
    document.head.querySelector("link").href =
      state.theme === "light"
        ? "/assets/images/light/logo.png"
        : "/assets/images/dark/preloader2.png";
  }, [state.theme]);

  var elements;
  var windowHeight;
  function init() {
    const fadeInLeft = Array.from(
        document.getElementsByClassName("fadeInLeft")
      ),
      fadeInRight = Array.from(document.getElementsByClassName("fadeInRight")),
      fadeInUp = Array.from(document.getElementsByClassName("fadeInUp")),
      fadeInDown = Array.from(document.getElementsByClassName("fadeInDown"));

    elements = [...fadeInLeft, ...fadeInRight, ...fadeInUp, ...fadeInDown];
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -100) {
        element.classList.add("animated");
        element.style.visibility = "visible";
        const elementClass = [...element.classList];
        if (elementClass.includes("fadeInLeft")) {
          element.style.animationName = "fadeInLeft";
        } else if (elementClass.includes("fadeInRight")) {
          element.style.animationName = "fadeInRight";
        } else if (elementClass.includes("fadeInUp")) {
          element.style.animationName = "fadeInUp";
        } else if (elementClass.includes("fadeInDown")) {
          element.style.animationName = "fadeInDown";
        }
      } else {
        element.style.visibility = "hidden";
        element.style.animationName = "none";
      }
    }
  }

  window.addEventListener("scroll", checkPosition, { passive: true });
  window.addEventListener("scroll", init, { passive: true });
  window.addEventListener("resize", init, { passive: true });
  init();
  checkPosition();

  window.addEventListener(
    "unload",
    () => {
      // document.cookie = "theme";
      localStorage.setItem("theme", state.theme);
    },
    { passive: true }
  );

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeContext.Provider value={{ ...state }}>
          <Home />
        </ThemeContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
