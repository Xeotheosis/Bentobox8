import React from "react";
import GalleriaCover from "../assets/Threads.webp";

const FrontMentorProfile = ({
  highlightedProject = "md:mvp lg:block xl:col-span-2 xl:row-span-2 bg-box-color  rounded-xl relative p-2",
}) => {
  return (
    <section className={highlightedProject}>
      <div className="flex justify-center items-center h-full scale-up-center-second">
        <img
          className="rounded-xl h-full object-scale-down"
          src={GalleriaCover}
          alt="highlighted project"
        />
      </div>
      <div className="absolute p-8 h-full w-full bottom-0 rounded-xl flex flex-col-reverse items-center justify-start shadow-box group scale-up-center-second">
        <a
          href="https://threads-clone-swart-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full w-fit font-bold tracking-wider  uppercase  text-white  text-xl cursor-pointer text-center poppins link transform lg:translate-y-full transition-all lg:opacity-0 duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 "
          style={{ animationDelay: "0.1s" }}>
          View Demo
        </a>
        <p className="text-white text-xl p-2 lg:transform lg:translate-y-[2rem] lg:transition-all lg:opacity-0 lg:duration-400  lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ">
          Threads Clone
        </p>
      </div>
    </section>
  );
};

export default FrontMentorProfile;
