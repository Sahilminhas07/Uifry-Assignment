import React from "react";
import PhoneImg from "./PhoneImg";
import iphone1 from "../assets/iPhone-13-Pro-Front.png";
import tri from "../assets/tri.png";
import wheel from "../assets/wheel.png";
import cube from "../assets/cube-04.png";
import all from "../assets/kk.png";
import bell from "../assets/bell.png";
import feature from "../assets/feature.png";
import star from "../assets/Star 1.png";

import orange from "../assets/Ellipse 1.png";
import yellow from "../assets/yellow.png";

const Feature = (props) => {
  return (
    <>
      <section className="mx-5 dark:text-white">
        <div className="">
          <img className="rotate-45 dark:invert" src={star} alt="" />
          <div className="xl:block hidden">
            <PhoneImg value={iphone1} />
          </div>
          <div className="relative xl:left-[800px] top-20 block xl:w-[40%]">
            <div>
              <h1 className="text-[#FF5555] font-semibold text-xl">FEATURES</h1>
              <h1 className="text-4xl font-extrabold">Uifry Premium</h1>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-xl flex gap-2">
                <img className="w-7" src={tri} alt="" />
                Budgeting Intervals
              </h1>
              <p className="font-extralight mt-3">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-xl flex gap-2">
                <img className="w-7" src={cube} alt="" />
                Budgeting Intervals
              </h1>
              <p className="font-extralight mt-3">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-xl flex gap-2">
                <img className="w-7" src={wheel} alt="" />
                Budgeting Intervals
              </h1>
              <p className="font-extralight mt-3">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>

        <img className=" float-right mt-28 dark:invert" src={star} alt="" />

        <div className="flex xl:mt-32 xl:mx-32">
          <div className="xl:w-1/2">
            <div className="mt-32">
              <div className="xl:hidden">
                
            <img className="absolute right-0 " src={orange} alt="" />
            <img className="absolute right-0 " src={orange} alt="" />

                
            <img className="relative z-50" src={all} alt="" />

              </div>
              <h1 className="text-[#FF5555] font-semibold text-xl">ADVANCE</h1>
              <h1 className="text-4xl font-extrabold">Why choose Uifry?</h1>
            </div>
            <div>
              <h1 className="text-2xl mt-8 font-bold flex gap-2">
                <img className="w-10" src={bell} alt="" />
                Clever notifications
              </h1>
              <p className="mt-4 font-light">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <div className="mt-28">
            

          <img className="absolute right-48 xl:block hidden" src={yellow} alt="" />
          <img className="absolute right-48 xl:block hidden" src={orange} alt="" />

          </div>
          <div>
            <img className="relative z-50 xl:flex hidden" src={all} alt="" />
          </div>
        </div>

        <img className="absolute rotate-45 right-[50%] xl:block hidden dark:invert" src={star} alt="" />

        <div className="-mt-28">
          <div className="xl:block hidden">
            <PhoneImg value={iphone1} />
          </div>
          <div className="relative xl:left-[800px] top-44 block xl:w-[40%]">
            <div>
              <h1 className="text-2xl mt-8 font-bold flex gap-2">
                <img className="w-10" src={feature} alt="" />
                Fully customizable
              </h1>
              <p className="mt-4 font-light">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
