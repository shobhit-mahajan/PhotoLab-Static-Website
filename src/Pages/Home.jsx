import React from "react";
import { Header } from "./Header";
import Servicesec from "./Servicesec";
import About from "./About";
import Images from "./Images";
import Experiment from "./Experiment";
import Review from "./Review";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Servicesec />
      <Experiment />
      <Images />
      <About />
      <Review />
      <Footer />
    </div>
  );
};
