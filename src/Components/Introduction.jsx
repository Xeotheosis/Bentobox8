import React from "react";

const Introduction = () => {
  return (
    <section className="md:introduction xl:col-span-4 xl:row-span-2 bg-box-color rounded-xl scale-up-center-third p-8 text-white font-medium text-xl 2xl:text-2xl poppins">
      <p className="poppins leading-8 2xl:leading-10 break-words">
        With a diverse professional background, I can thrive in any environment.
        Adapting quickly, and delivering exceptional results –
        <span className="font-bold bg-clip-text bg-gradient-to-b from-blue-600 to-cyan-400 text-transparent">
          {" "}
          no matter the task.
        </span>
      </p>
    </section>
  );
};

export default Introduction;
