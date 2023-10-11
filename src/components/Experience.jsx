const Experience = () => {
  return (
    <>
      <div id="experience" className="lg:pt-[100px] lg:text-center">
        <div className="lg:py-2 py-1">
          <h1 className="font-bold text-xl">
            <span className="text-[#ff6200]">02.</span> Where I've Worked
          </h1>
        </div>
        <div className="lg:flex lg:flex-col text-justify text-sm text-[#ffffffbd] lg:px-40">
          <div className="lg:flex lg:gap-4 lg:py-5">
            <div>Rangin Technology</div>
            <div className="">
              - I interned as a Front-End Web Developer for three months. <br />{" "}
              - I got to know about JavaScript, React, Styled Components, etc.
              <br /> -Projects: Duk@an
            </div>
          </div>
          <div className="lg:flex lg:py-5 lg:gap-4">
            <div>Nep Tech Pal Ltd.</div>
            <div className="">
              - I worked as a Front-End Web Developer for three months. <br /> -
              Worked with a team of designer, front-end and backend developers.
              <br /> -Projects: Nep Tech Pal, Loksewa.
            </div>
          </div>
          <div className="lg:flex lg:py-5 lg:gap-4">
            <div>Devorak Innovation</div>
            <div className="">
              - I had a three-week project opportunity.
              <br /> - Knew more about Next js and state management with
              Zustand.
              <br /> -Projects: QR Menu.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
