import React from "react";
import { ChildrenProps } from "../../shared/types";

const Button = ({ children, className }: ChildrenProps) => {
  return (
    <button
      className={`${className} bg-secondary rounded-full py-2 px-3 text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
