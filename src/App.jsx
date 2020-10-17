import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeChanger = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

    document.head.querySelector("link").href =
      theme === "light"
        ? "assets/images/light/logo.png"
        : "/assets/images/dark/preloader2.png";
  }, [theme]);
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="body">
          <Home theme={theme} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
