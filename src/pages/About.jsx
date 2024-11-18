import React from "react";
import Hero from "../components/about/aboutus"
import WhyUs from "../components/about/whyUs";
import OurMission from "../components/about/ourMission";
import OurTeam from "../components/about/ourTeam";



const About = () => {
  return (
    <>
      <div>
        <Hero />
        <WhyUs />
        <OurMission />
        <OurTeam />
      </div>
    </>
  );
};

export default About;
