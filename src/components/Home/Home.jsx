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
const Prevention = React.lazy(() => import("../Prevention/Prevention"));
const Blog = React.lazy(() => import("../Blog/Blog"));
const Cta = React.lazy(() => import("../CTA/Cta"));
const Footer = React.lazy(() => import("../Footer/Footer"));

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
            <Prevention />
            <Blog />
            <Cta />
            <Footer />
          </Suspense>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Home;
