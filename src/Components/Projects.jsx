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
      title: "Threads",
      source: "https://threads-clone-swart-rho.vercel.app/",
      description: "NextJS / MongoDB / Clerk",
      content: <Galleria />,
    },
    {
      title: "Coffeeroasters",
      source: "https://xeotheosis.github.io/CoffeeRoasters/",
      description:
        "Multiple page layout with order confirmation modal and routing",
      content: <CoffeeRoasters />,
    },
    {
      title: "Tic Tac Toe",
      source: "https://xeotheosis.github.io/TicTacToe-3/",
      description: "Tic Tac Toe with Min-Max algorithm",
      content: <TicTacToe />,
    },
    { title: "Designo", description: "Soon", content: <Designo /> },
  ];

  const customTechStackClasses =
    "order-2 bg-box-color md:order-none md:technology flex gap-8 lg:col-span-4 lg:row-span-1  rounded-xl lg:flex-wrap items-center lg:gap-3 p-4 justify-around scale-up-center";
  const highlightedProject =
    "hidden md:block md:mvp lg:col-span-2 lg:row-span-2 bg-box-color rounded-xl relative lg:hidden ";
  const heroDisplaySettings =
    "hidden md:block h-full md:hero lg:col-span-3 lg:row-span-4 rounded-xl";

  const buttonDisplaySettings =
    "hidden md:contact lg:block lg:col-span-2 lg:row-span-1 bg-box-color rounded-xl scale-up-center-seventh card";
  return (
    <section className="p-4 h-full flex flex-col gap-4 pt-10 pb-40 md:pb-0 md:pt-0 w-full md:grid md:h-full md:tablet-grid md:tablet-grid-projects lg:grid-cols-9 lg:gap-2 relative lg:h-screen lg:p-0 lg:overflow-auto lg:pt-10 lg:pb-20 2xl:pb-40">
      <div className="hidden lg:col-span-9 lg:row-span-1 lg:p-0 "></div>
      <Hero displaySettings={heroDisplaySettings} />
      <FrontMentorProfile highlightedProject={highlightedProject} />
      <Accordion items={accordionItems} />
      <About
        aboutText={aboutText}
        customAboutClasses="md:block order-1 md:order-none lg:col-span-3 lg:row-span-1"
      />
      <TechStack customTechStackClasses={customTechStackClasses} />
      <ContactButton
        label={"Contact"}
        onClick={goToContactTab}
        displaySettings={buttonDisplaySettings}
      />
      <div className="hidden md:block md:empty md:p-20 md:h-full md:w-full lg:hidden"></div>
    </section>
  );
};

export default Projects;
