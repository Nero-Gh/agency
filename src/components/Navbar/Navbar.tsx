import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import useMediaQuery from "../../hook/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { flexCenter, wrapper } from "../../shared/utils";

const Navbar = () => {
  const [menuToggle, setMenuToggled] = useState(false);
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <div className={`${flexCenter}  w-full py-10`}>
      <nav className={`${flexCenter} ${wrapper} gap-16 `}>
        {/* Right Nav */}
        <div className={`${isAboveMediumScreen ? "w-[20%]" : "w-full"}`}>
          <h1 className="text-primary text-3xl font-meduim">
            Up<span className="text-tertiary">Get</span>
          </h1>
        </div>
        {/* left nav */}
        <div className={`${flexCenter} grow  gap-20`}>
          {isAboveMediumScreen ? (
            <>
              <div className={`${flexCenter} gap-x-14`}>
                <NavLink
                  to="/"
                  className="hover:text-primary font-semibold text-gray-600"
                >
                  Home
                </NavLink>
                <NavLink
                  to="services"
                  className="hover:text-primary font-semibold text-gray-600"
                >
                  Services
                </NavLink>
                <NavLink
                  to="work"
                  className="hover:text-primary font-semibold text-gray-600"
                >
                  How We Work
                </NavLink>
                <NavLink
                  to="contact"
                  className="hover:text-primary font-semibold text-gray-600"
                >
                  Contact
                </NavLink>
              </div>
              <div className="nav-btn">
                <Button>Lets Talk</Button>
              </div>
            </>
          ) : (
            <div>
              <Button className="mr-0">
                <Bars3Icon className="h-6 w-6 text-white" />
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
