import React from "react";
import Content from "./Content";
import Hero from "./Hero";
import Social from "./Social";

const Main = () => {
  return (
    <>
      <div id="main" className="flex justify-between px-10 ">
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

export default Main;
