import React from "react";

const Hero = ({
  displaySettings = "h-full md:hero lg:col-span-3 lg:row-span-4 rounded-3xl",
}) => {
  return (
    <section className={displaySettings}>
      <div className="h-full w-full relative bg-hero bg-contain  md:rounded-3xl bg-[#e9ecef] hero-shadow  md:max-w-none md:py-0">
        <div className="bg-transparent">
          <h1 className="text-6xl text-center font-bold poppins  md:hidden scale-up-center">
            Andrei Neacşu
          </h1>
          <h2 className="text-4xl text-center poppins md:hidden scale-up-center">
            React Developer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;