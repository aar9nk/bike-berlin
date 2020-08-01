import React from "react";
import Layout from "../Layout";

import Featured from "./Featured";
import About from "./About";

const Home = () => {
  return (
    <Layout>
      <Featured />
      <About />
    </Layout>
  );
};

export default Home;
