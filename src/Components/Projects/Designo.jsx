import React from "react";
import DesignoCover from "./projectCovers/Designo.webp";

const Designo = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <img
          className="max-w-full block absolute inset-0 object-cover w-full h-full -z-10"
          src={DesignoCover}
          alt="Tic Tac Toe"
        />
      </div>
      <div className="absolute p-4 h-full w-full top-0 rounded-xl flex items-center justify-center opacity-100"></div>
    </>
  );
};

export default Designo;
