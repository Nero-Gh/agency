import React from "react";
import Banner from "../components/Banner/Banner";
import Experience from "../components/ExperienceCard/Experience";
import Partners from "../components/Partners/Partners";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <Experience />
      <Partners />
    </div>
  );
};

export default Home;
