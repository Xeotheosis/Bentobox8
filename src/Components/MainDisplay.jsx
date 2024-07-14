import React from "react";
import Hero from "./Hero";
import Weather from "./Weather";
import Timeline from "./Timeline";
import TechStack from "./TechStack";
import Socials from "./Socials";
import ContactButton from "./ContactButton";
import FrontMentorProfile from "./FrontMentorProfile";
import Introduction from "./Introduction";
import About from "./About";

const MainDisplay = ({ aboutText, goToContactTab }) => {
  const highlightedProject =
    "md:hidden lg:block lg:col-span-2 lg:row-span-2 bg-box-color rounded-2xl relative p-2 ";
  return (
    <section className="block h-full w-full md:grid md:h-full md:tablet-grid lg:grid-cols-9 lg:grid-rows-6 lg:gap-4 relative overflow-hidden">
      <Hero />
      <FrontMentorProfile highlightedProject={highlightedProject} />
      <Weather />
      <Socials />
      <Introduction />
      <Timeline />
      <About aboutText={aboutText} />
      <TechStack />
      <ContactButton
        onClick={goToContactTab}
        label="Contact"
      />
      <div className="hidden md:block md:empty md:h-full md:w-full md:p-20 lg:hidden"></div>
    </section>
  );
};

export default MainDisplay;
