const Work = () => {
  return (
    <>
      <div id="work" className="lg:pt-[100px]">
        <div className="lg:py-2 py-1">
          <h1 className="font-semibold text-xl">
            <span className="text-[#ff6200]">03.</span> Some Projects I've built
          </h1>
        </div>
        <div className="lg:flex items-center lg:gap-4 mb-6">
          <div className="lg:h-[50vh] lg:w-[60vw] ">
            <a target="_blank" href="https://revel.qrmenu.revelerp.com/13">
              <img
                className="lg:h-[100%] lg:w-[100%] object-cover rounded-md"
                src="./images/QR-menu.png"
                alt="QR-menu thumbnail"
              />
            </a>
          </div>
          <div className="lg:flex flex-col items-center lg:gap-2">
            <h2>
              <span className="text-[#ff6200]"> QR-Menu</span> - A digital menu
            </h2>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas velit sed. Provident minima corrupti, ex illum doloribus
              aspernatur beatae ut nesciunt recusandae repellat aperiam quae
              autem obcaecati molestias pariatur!
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:gap-4 mb-6">
          <div className="lg:h-[50vh] lg:w-[60vw] ">
            <a target="_blank" href="https://github.com/WebDevNarayan/dukaan">
              <img
                className="lg:h-[100%] lg:w-[100%] object-cover rounded-md"
                src="./images/dukaan.png"
                alt="Duk@an thumbnail"
              />
            </a>
          </div>
          <div className="lg:flex flex-col items-center lg:gap-2">
            <h2>
              <span className="text-[#ff6200]">Duk@an</span> - An e-commerce web
              app
            </h2>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas velit sed. Provident minima corrupti, ex illum doloribus
              aspernatur beatae ut nesciunt recusandae repellat aperiam quae
              autem obcaecati molestias pariatur!
            </p>
          </div>
        </div>
        <div className="lg:flex items-center lg:gap-4 mb-6">
          <div className="lg:h-[50vh] lg:w-[60vw] ">
            <a href="https://www.neptechpal.com.np/" target="_blank">
              {" "}
              <img
                className="lg:h-[100%] lg:w-[100%] object-cover rounded-md"
                src="./images/NepTechPal.png"
                alt="Nep Tech Pal thumbnail"
              />
            </a>
          </div>
          <div className="lg:flex flex-col items-center lg:gap-2">
            <h2>
              <span className="text-[#ff6200]"> Nep Tech Pal</span> - A website
              for Tech company
            </h2>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas velit sed. Provident minima corrupti, ex illum doloribus
              aspernatur beatae ut nesciunt recusandae repellat aperiam quae
              autem obcaecati molestias pariatur!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
