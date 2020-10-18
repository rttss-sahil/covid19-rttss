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
