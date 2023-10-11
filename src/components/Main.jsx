import React from "react";
import Content from "./Content";
import Hero from "./Hero";
import Social from "./Social";

const MainSection = () => {
  return (
    <>
      <div
        id="main"
        className="lg:flex lg:items-center lg:justify-between lg:h-[80vh] "
      >
        <div className="">
          <Content />
        </div>
        <div className="">
          <Hero />
        </div>
        <div className="">
          <Social />
        </div>
      </div>
    </>
  );
};

export default MainSection;
