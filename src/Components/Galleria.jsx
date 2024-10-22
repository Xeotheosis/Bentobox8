import React from "react";
import GalleriaCover from "../assets/Threads.webp";

const Galleria = () => {
  return (
    <>
      <img
        className="max-w-full block absolute inset-0 object-scale-down w-full h-full -z-10"
        src={GalleriaCover}
        alt="highlighted project"
      />
    </>
  );
};

export default Galleria;
