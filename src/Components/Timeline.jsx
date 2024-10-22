import React from "react";

const Timeline = () => {
  return (
    <section className="md:timeline-container bg-box-color rounded-xl xl:col-span-2 xl:row-span-2 scale-up-center-sixth">
      <div className="timeline">
        <div className="bg-white py-1 first-message rounded-r-xl flex flex-col self-start px-3 w-full max-w-[7.5rem]">
          <p className="font-bold text-base lg:text-xs 2xl:text-base">
            Junior Developer
          </p>
        </div>
        <div className=" w-1 h-full flex flex-col justify-evenly items-center timeline-column relative example-test">
          <span
            className="p-2 bg-white rounded-full scale-up-center"
            style={{ animationDelay: "1.9s" }}></span>
          <span
            className="p-2 bg-white rounded-full scale-up-center"
            style={{ animationDelay: "1.7s" }}></span>
          <span
            className="p-2 bg-white rounded-full scale-up-center"
            style={{ animationDelay: "1.5s" }}></span>
        </div>

        <div className="bg-white py-1 px-3 second-message rounded-l-xl justify-self-end  self-center text-right w-full max-w-[7.5rem ">
          <p className="font-bold text-base lg:text-xs 2xl:text-base">
            Junior Analyst
          </p>
        </div>

        <div className="bg-white py-1 third-message rounded-r-xl self-end px-3 w-full max-w-[7.5rem]">
          <p className="font-bold text-base lg:text-xs 2xl:text-base">
            Account Manager
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
