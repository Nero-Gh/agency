import React from "react";
import { images } from "../../shared/utils";
import { Partners } from "../../shared/types";

const PartnersCard = ({ title, image }: Partners) => {
  return (
    <div className=" h-[200px] flex p-2 gap-2   align-middle items-center hover:translate-x-2 transition-all cursor-pointer">
      <img src={image} alt="" className="w-[100px] h-full flex-grow py-2 " />
      <h2 className="text-4xl font-extrabold text-gray-300">{title}</h2>
    </div>
  );
};

export default PartnersCard;
