import React from "react";

const ThankYou = () => {
  return (
    <section className="order-3 bg-box-color md:thankyou lg:col-span-6 lg:row-span-1  rounded-3xl p-4 flex flex-col space-between gap-2 lg:gap-0 xl:gap-2 scale-up-center-fifth lg:p-6">
      <p className="poppins text-xl 2xl:text-2xl text-white text-left inline-block w-full">
        Thank you for your thoughtful consideration in reviewing my portfolio.
      </p>
      <p className="inline-block text-right text-white text-2xl xl:text-4xl signature">
        Andrei
      </p>
    </section>
  );
};

export default ThankYou;
