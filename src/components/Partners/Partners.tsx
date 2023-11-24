import React from "react";
import { images, wrapper } from "../../shared/utils";
import PartnersCard from "./PartnersCard";

const Partners = () => {
  return (
    <div
      className={`${wrapper} w-2/3  mt-10 flex flex-col lg:flex-row items-center justify-center  lg:gap-10 mx-auto`}
    >
      <PartnersCard image={images.slack} title="Slack" />
      <PartnersCard image={images.google} />
      <PartnersCard image={images.youtube} />
      <PartnersCard image={images.cangura} />
    </div>
  );
};

export default Partners;
