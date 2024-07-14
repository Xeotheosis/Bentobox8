import React from "react";
import About from "./About";
import Hero from "./Hero";
import FrontMentorProfile from "./FrontMentorProfile";
import ContactButton from "./ContactButton";
import CoffeeRoasters from "./Projects/CoffeeRoasters";
import TicTacToe from "./Projects/TicTacToe";
import Accordion from "./Accordion";
import TechStack from "./TechStack";
import Designo from "./Projects/Designo";
import Galleria from "./Galleria";

const Projects = ({ aboutText, goToContactTab }) => {
  const accordionItems = [
    {
      source: "https://xeotheosis.github.io/Galleria-3/",
      description: "Masonry layout with active tabs and attention to details",
      content: <Galleria />,
    },
    {
      source: "https://xeotheosis.github.io/CoffeeRoasters/",
      description:
        "Multiple page layout with order confirmation modal and routing",
      content: <CoffeeRoasters />,
    },
    {
      source: "https://xeotheosis.github.io/TicTacToe-3/",
      description: "Tic Tac Toe with Min-Max algorithm",
      content: <TicTacToe />,
    },
    { description: "Soon", content: <Designo /> },
  ];

  const highlightedProject =
    "hidden md:block md:mvp lg:col-span-2 lg:row-span-2 bg-box-color rounded-2xl relative p-2 lg:hidden ";
  const heroDisplaySettings =
    "hidden md:block h-full md:hero xl:col-span-3 xl:row-span-4 rounded-3xl";

  const buttonDisplaySettings =
    "hidden md:contact xl:block xl:col-span-2 xl:row-span-1 bg-box-color rounded-3xl scale-up-center-seventh card";
  return (
    <section className="p-4 h-full flex flex-col gap-4 pt-10 pb-40 md:pb-0 md:pt-0 w-full md:grid md:h-full md:tablet-grid md:tablet-grid-projects xl:grid-cols-9 xl:grid-rows-6 xl:gap-4 relative lg:p-0">
      <div className="hidden xl:col-span-9 xl-row-span-1 xl:p-0"></div>
      <Hero displaySettings={heroDisplaySettings} />
      <FrontMentorProfile highlightedProject={highlightedProject} />
      <Accordion items={accordionItems} />
      <About
        aboutText={aboutText}
        customAboutClasses="md:block order-1 md:order-none"
      />
      <TechStack />
      <ContactButton
        label={"Contact"}
        goToContactTab={goToContactTab}
        displaySettings={buttonDisplaySettings}
      />
      <div className="hidden md:block md:empty md:p-20 md:h-full md:w-full lg:hidden"></div>
    </section>
  );
};

export default Projects;
