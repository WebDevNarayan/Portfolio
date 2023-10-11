const Contact = () => {
  return (
    <>
      <div id="contact" className="lg:pt-[100px] lg:text-center">
        <div className="lg:py-2 py-1">
          <h1 className="font-bold text-xl">
            <span className="text-[#ff6200]">04.</span> What's next?
          </h1>
        </div>
        <div className="lg:py-5 text-center">
          <h1 className="font-mont_alter text-2xl lg:text-5xl font-bold">
            Get In Touch
          </h1>
          <p className="text-justify text-sm text-[#ffffffbd] lg:px-60 lg:py-5">
            I am presently seeking fresh prospects, and my email is readily
            accessible. Whether you have an inquiry or simply wish to greet, I
            will make every effort to respond to you promptly!
          </p>
        </div>
        <div className="px-10 py-10 text-center">
          <a
            className="border-cyan-600 border-2 rounded-lg px-10 py-5 hover:bg-slate-700 hover:text-[#ff6200]"
            target="_blank"
            href="mailto:narayandura5@gmail.com"
          >
            Hire Me !
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
