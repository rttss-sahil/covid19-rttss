import React, { Suspense } from "react";
import "./Home.css";

import Loading from "../Loading/Loading";
import ThemeContext from "../refs/Context/Context";

const Navbar = React.lazy(() => import("../Navbar/Navbar"));
const Welcome = React.lazy(() => import("../Welcome/Welcome"));
const Counter = React.lazy(() => import("../Counter/Counter"));
const About = React.lazy(() => import("../About/About"));
const Symptoms = React.lazy(() => import("../Symptoms/Symptoms"));
const Map = React.lazy(() => import("../Map/Map"));
const Contagion = React.lazy(() => import("../Contagion/Contagion"));

function Home() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`body ${state.theme}`}>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Welcome />
            <Counter />
            <About />
            <Symptoms />
            <Map />
            <Contagion />
          </Suspense>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Home;
