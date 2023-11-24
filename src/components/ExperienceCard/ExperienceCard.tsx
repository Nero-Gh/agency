import React from "react";
import { wrapper } from "../../shared/utils";
import { Experience } from "../../shared/types";

type Props = {};

const ExperienceCard = ({ number, title }: Experience) => {
  return (
    <div
      className={`  border border-gray-300 p-4 bg-[#f1f1f1] h-[150px] w-[350px] flex flex-col align-middle justify-center`}
    >
      <h1 className="font-bold text-3xl">
        {number}
        <span className="text-sm">+</span>
      </h1>
      <p className="mt-2 font-medium text-base text-gray-500">{title}</p>
    </div>
  );
};

export default ExperienceCard;
