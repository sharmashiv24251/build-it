import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
