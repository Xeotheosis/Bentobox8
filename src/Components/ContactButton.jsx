import React from "react";

const ContactButton = ({
  label,
  onClick,
  displaySettings = "md:contact lg:col-span-2 lg:row-span-1  rounded-3xl scale-up-center-seventh card",
}) => {
  return (
    <section className={displaySettings}>
      <div className="card-content flex justify-center items-center h-full w-full bg-box-color rounded-3xl">
        <button
          onClick={onClick}
          className="text-4xl xl:text-5xl p-4 font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent poppins">
          {label}
        </button>
      </div>
    </section>
  );
};

export default ContactButton;
