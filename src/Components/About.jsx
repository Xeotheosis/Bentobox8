import React from "react";

const About = ({ aboutText, customAboutClasses }) => {
  return (
    <section
      className={`"${customAboutClasses} block md:about bg-box-color rounded-xl p-2" scale-up-center`}>
      <div className="h-full w-full rounded-2xl flex items-center justify-center whitespace-nowrap">
        <h1 className="text-5xl lg:text-4xl 2xl:text-5xl p-4 font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent poppins">
          {aboutText}
        </h1>
      </div>
    </section>
  );
};

export default About;
