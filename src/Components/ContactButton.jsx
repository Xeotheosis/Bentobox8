import React from "react";

const ContactButton = ({
  label,
  onClick,
  displaySettings = "md:contact xl:col-span-2 xl:row-span-1  rounded-xl scale-up-center-seventh ",
}) => {
  return (
    <section className={displaySettings}>
      <div className="card-content flex justify-center items-center h-full w-full bg-box-color rounded-xl card">
        <button
          onClick={onClick}
          className="text-4xl 2xl:text-5xl p-4 font-bold bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent poppins">
          {label}
        </button>
      </div>
    </section>
  );
};

export default ContactButton;
