import React from "react";
import SpaceTourismCover from "./projectCovers/SpaceTourism.webp";

const SpaceTourism = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <img
          className="max-w-full block absolute inset-0 object-cover w-full h-full -z-10"
          src={SpaceTourismCover}
          alt="Space Tourism"
        />
      </div>
      <div className="absolute p-4 h-full w-full top-0 rounded-2xl flex items-center justify-center opacity-100"></div>
    </>
  );
};

export default SpaceTourism;
