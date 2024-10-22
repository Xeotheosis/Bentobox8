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
    "md:hidden lg:block lg:mvp xl:col-span-2 xl:row-span-2 bg-box-color rounded-2xl relative p-2 ";
  return (
    <section className="block h-full w-full md:grid md:h-full md:tablet-grid lg:laptop xl:grid-cols-9 xl:grid-rows-6 xl:gap-4 relative overflow-hidden md:overflow-auto">
      <Hero />
      <FrontMentorProfile highlightedProject={highlightedProject} />
      <Weather />
      <Socials />
      <Introduction />
      <Timeline />
      <About
        aboutText={aboutText}
        customAboutClasses="hidden md:block xl:col-span-3 xl:row-span-1"
      />
      <TechStack />
      <ContactButton
        onClick={goToContactTab}
        label="Contact"
      />
      <div className="hidden md:block md:empty md:h-full md:w-full md:p-20 xl:hidden"></div>
    </section>
  );
};

export default MainDisplay;
