import React from "react";
import { wrapper } from "../../shared/utils";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className={`${wrapper} bg-primary py-10 px-2 text-xl text-white flex justify-center`}
    >
      ©Copyright UpGet, 2023
    </div>
  );
};

export default Footer;
