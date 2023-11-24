import React from "react";
import ExperienceCard from "./ExperienceCard";
import { wrapper } from "../../shared/utils";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div
      className={`${wrapper} w-[80%] flex flex-wrap gap-2 mt-20  lg:gap-0 justify-center lg:flex-row mx-auto justify-center md:mt-[-5px] z-30 relative`}
    >
      <ExperienceCard number={10} title="Years of experience" />
      <ExperienceCard number={100} title="Agency Members" />
      <ExperienceCard number={3040} title="Projects Complete" />
    </div>
  );
};

export default Experience;
