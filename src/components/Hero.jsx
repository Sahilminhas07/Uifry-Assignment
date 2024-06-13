import React from "react";
import GroupImage from "../assets/Group1.png";
import Vector from "../assets/Vector 1.png"
import play from "../assets/Group 3.png"
import iphone1 from "../assets/iPhone-13-Pro-Front.png"
import iphone2 from "../assets/iPhone-13-Pro-Front (1).png"
import bgorange from "../assets/Ellipse 1.png"
import star from "../assets/Star 1.png"
import yellow from "../assets/yellow.png"



const Hero = () => {
  return (
    <>
    <section className="flex xl:mx-36 relative mt-3">
        <img className="absolute -left-28 w-10 top-10 rotate-45 xl:block hidden dark:invert" src={star} alt="" />
        <img src={bgorange} className="xl:absolute xl:flex hidden bottom-[420px] z-10" alt="" />
        <img src={yellow} className="xl:absolute xl:flex hidden bottom-[420px] z-0" alt="" />



        
      <div className="mx-2 z-20 xl:w-[48%] xl:mt-28 dark:text-white">
        <h1 className="xl:text-6xl text-2xl font-extrabold dark:text-white">Make The Best</h1>
        <h1 className="xl:text-6xl text-2xl font-extrabold xl:leading-[64px]">Financial Decisions</h1>
        <p className="text-s font-semibold xl:mt-5">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing 
          sociis arcu lorem porttitor.
        </p>
        <div className="mt-4 xl:flex xl:gap-6">
          <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-md bg-black text-white text-lg font-semibold dark:invert">Get Started <span>
            <img src={Vector} alt="" /></span></button>
          <button className=" mt-3 flex justify-center items-center gap-2 px-4 py-3 rounded-md text-lg  font-semibold" >Watch Video <span>
            <img className="dark:invert"  src={play} alt="" /></span></button>
        </div>

        <div className="mx-5">
          <img className="" src={GroupImage} alt="" />
        </div>
      </div>
      <div className="xl:relative xl:bottom-10 xl:block xl:mx-10 xl:w-[44%] hidden">
      <img className="absolute top-10 right-10 z-50"   src={iphone1} alt="" />
        <img className="absolute left-16 top-20 z-40"  src={iphone2} alt="" />
        <img className="relative top-40 left-40 z-30"   src={iphone1} alt="" />


        <img src={bgorange} className="xl:absolute xl:flex bottom-0 z-0 hidden" alt="" />
        <img className="absolute bottom-32 rotate-45 xl:block hidden dark:invert" src={star} alt="" />

      </div>
      
    </section>
    </>
  );
};

export default Hero;
