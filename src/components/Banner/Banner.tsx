import React from "react";
import { flexCenter, images, wrapper } from "../../shared/utils";
import Button from "../Button/Button";
import { BackwardIcon } from "@heroicons/react/20/solid";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className={`${flexCenter} ${wrapper}  relative`}>
      <div className="w-full h-[65dvh] flex relative   ">
        <img
          src={images.mapbg}
          className=" object-cover w-full h-[65dvh] absolute "
          alt=""
        />
        <div className={`flex  items-center z-[1]`}>
          {/* right side */}
          <div className="flex flex-col justify-between gap-10">
            <div className={`flex justify-center lg:justify-start gap-7 `}>
              <img
                src={images.instagram}
                className="w-[45px] h-[45px] p-2 bg-tertiary border-2 border-[#fff] shadow-2xl shadow-gray-600 rounded-full"
                alt=""
              />
              <img
                src={images.twitter}
                className="w-[45px] h-[45px] p-2 bg-secondary border-2 border-[#fff] shadow-2xl shadow-gray-600 fill-white rounded-full"
                alt=""
              />
            </div>
            <h1 className=" text-4xl text-center lg:text-left lg:text-5xl lg:w-3/4 font-semibold text-gray-950">
              Make Digital Product With Our Agency
            </h1>
            <p className=" p-2 text-center lg:text-left lg:w-3/4 text-lg text-gray-600 font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              accusamus, itaque reiciendis repellendus sit ipsa.
            </p>
            <div className="flex justify-center lg:justify-start gap-10">
              <Button className="px-6 shadow-2xl shadow-red-200">
                Contact Us
              </Button>
              <div className="flex gap-10 bg-white  shadow-md p-2 rounded-full py-q">
                <Button className="bg-tertiary">
                  <BackwardIcon className="w-6 h-6" />
                </Button>
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Done Projects
                  </p>
                  <p className="text-xl font-semibold">
                    4356<span className="text-sm">+</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* left side */}
          <div className="h-full hidden lg:flex align-middle justify-center ">
            <img src={images.salesPerson} alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
