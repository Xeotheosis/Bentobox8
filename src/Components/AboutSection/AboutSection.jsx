import React from "react";
import Weather from "../Weather";
import About from "../About";
import Introduction from "../Introduction";
import Timeline from "../Timeline";
import TechStack from "../TechStack";
import Opera from "./AboutCovers/opera.png";

const AboutSection = ({ aboutText }) => {
  return (
    <section className="relative w-full px-4 pt-10 pb-40 flex flex-col gap-4">
      <About aboutText={aboutText} />
      <Weather />
      <Introduction />
      <Timeline />
      <TechStack />
    </section>
  );
};

export default AboutSection;
