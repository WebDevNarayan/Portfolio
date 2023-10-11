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
            <img
              className="lg:h-[100%] lg:w-[100%] object-cover"
              src="./images/QR-menu.png"
              alt="QR-menu thumbnail"
            />
          </div>
          <div className="lg:flex flex-col items-center lg:gap-2">
            <h2>QR-Menu - A digital menu</h2>
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
            <img
              className="lg:h-[100%] lg:w-[100%] object-cover"
              src="./images/dukaan.png"
              alt="Duk@an thumbnail"
            />
          </div>
          <div className="lg:flex flex-col items-center lg:gap-2">
            <h2>Duk@an - An e-commerce web app</h2>
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
            <img
              className="lg:h-[100%] lg:w-[100%] object-cover"
              src="./images/NepTechPal.png"
              alt="Nep Tech Pal thumbnail"
            />
          </div>
          <div className="lg:flex flex-col items-center lg:gap-2">
            <h2>Nep Tech Pal - A website for Tech company</h2>
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
