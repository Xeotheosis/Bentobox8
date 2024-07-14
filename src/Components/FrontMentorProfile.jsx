import React from "react";
import GalleriaCover from "../assets/Galleria.webp";

const FrontMentorProfile = ({
  highlightedProject = "md:mvp lg:col-span-2 lg:row-span-2 bg-box-color lg:block rounded-2xl relative p-2 ",
}) => {
  return (
    <section className={highlightedProject}>
      <div className="flex justify-center items-center h-full scale-up-center">
        <img
          className="rounded-xl h-full object-cover"
          src={GalleriaCover}
          alt="highlighted project"
        />
      </div>
      <div className="absolute p-4 h-full w-full top-0 shadow-box rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100  transition delay-100 duration-500">
        <button className="bg-white p-3 rounded-full w-full font-bold tracking-wider duration-500">
          View Project
        </button>
      </div>
    </section>
  );
};

export default FrontMentorProfile;
