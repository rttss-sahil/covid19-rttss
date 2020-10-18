import React, { Suspense } from "react";
import "./Home.css";

import Loading from "../Loading/Loading";
import ThemeContext from "../refs/Context/Context";

const Navbar = React.lazy(() => import("../Navbar/Navbar"));
const Welcome = React.lazy(() => import("../Welcome/Welcome"));

function Home() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`body ${state.theme}`}>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Welcome />
          </Suspense>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Home;
