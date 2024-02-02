import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About";
import Getstarted from "./components/Getstarted";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <About />
      <Getstarted />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
