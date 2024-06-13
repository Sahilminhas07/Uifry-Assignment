import React from "react";
import bgorange from "../assets/Ellipse 1.png";
import yellow from "../assets/yellow.png";
import ecllips from "../assets/Ellipse.png";

const PhoneImg = (props) => {
  return (
    <>
      <section className="inline">
        <div className="relative mx-32 flex">
          <img className="rotate-[15deg] absolute z-50 hover:scale-110 transition-all drop-shadow-lg" src={props.value} alt="" />
          <img className="absolute top-28" src={bgorange} alt="" />
          <img className="absolute top-10" src={yellow} alt="" />
          <img className="absolute top-8 left-4 dark:invert" src={ecllips} alt="" />
          <img className="absolute top-20 dark:invert" src={ecllips} alt="" />
          <img className="absolute top-32 dark:invert" src={ecllips} alt="" />
        </div>
      </section>
    </>
  );
};

export default PhoneImg;
