import React, { useState } from "react";
import AccordionPanel from "./AccordionPanel";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === !index ? null : index);
  };

  return (
    <section className="p-2 rounded-xl flex flex-col lg:flex-row gap-4 w-full order-3 h-[40rem]  md:projects md:order-none lg:h-auto lg:min-h-[28rem] lg:col-span-6 lg:row-span-4 lg:p-2">
      {items.map((item, index) => (
        <AccordionPanel
          key={index}
          index={index}
          isActive={activeIndex === index}
          onToggle={toggleAccordion}
          delay={0.5 + index * 0.1}
          {...item}
        />
      ))}
    </section>
  );
};

export default Accordion;
