import React, { Suspense } from "react";
import "./Home.css";

import Loading from "../Loading/Loading";
import ThemeContext from "../refs/Context/Context";

const Navbar = React.lazy(() => import("../Navbar/Navbar"));

function Home() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`body ${state.theme}`}>
          <Suspense fallback={<Loading />}>
            <Navbar />
          </Suspense>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Home;
