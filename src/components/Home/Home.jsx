import React, { Suspense } from "react";
import "./Home.css";

import Loading from "../Loading/Loading";
const Navbar = React.lazy(() => import("../Navbar/Navbar"));

function Home({ theme }) {
  return (
    <Suspense fallback={<Loading theme={theme} />}>
      <Loading theme={theme} />
      <Navbar />
    </Suspense>
  );
}

export default Home;
