import { React } from "react";
import Hero from "../Hero";
import Socials from "../Socials";
import About from "../About";
import EmailInput from "./EmailInput";
import ThankYou from "./ThankYou";

const Contact = ({ aboutText, notify }) => {
  const heroDisplaySettings =
    "hidden md:block h-full md:hero lg:col-span-3 lg:row-span-4 rounded-3xl";

  const socialCustomClasses =
    "order-1 md:order-none  grid grid-cols-2 grid-rows-2 socials gap-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:col-span-1 lg:row-span-4 lg:gap-2";

  return (
    <section className="flex flex-col gap-4 justify-center py-10 pb-40 p-4 md:p-0 h-full w-full md:grid  md:tablet-grid-contact lg:grid-cols-9 lg:gap-2 relative xl:pt-10 xl:overflow-auto xl:pb-20 2xl:pb-40">
      <div className="hidden lg:col-span-9 lg-row-span-1 lg:p-0"></div>
      <Hero displaySettings={heroDisplaySettings} />
      <EmailInput notify={notify} />
      <Socials customSocialClasses={socialCustomClasses} />
      <About
        aboutText={aboutText}
        customAboutClasses="hidden md:block lg:col-span-3 lg:row-span-1"
      />
      <ThankYou />
      <div className="hidden md:block md:h-full md:w-full md:p-20 lg:hidden"></div>
    </section>
  );
};

export default Contact;
