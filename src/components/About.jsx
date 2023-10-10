const AboutMe = () => {
  return (
    <>
      <div id="about" className="lg:pt-[100px]">
        <div className="lg:py-2 py-1">
          <h1 className="font-semibold text-xl">
            <span className="text-[#ff6200]">01.</span> About Me
          </h1>
        </div>
        <div className="sm:flex sm:flex-col md:flex lg:justify-around md:flex-col lg:flex lg:flex-row lg:gap-10 lg:px-10">
          <div className="text-justify text-sm text-[#ffffffbd]">
            <p className="">
              Hello! My name is Narayan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2021
              as a web designer, focusing on making websites look great and
              user-friendly. Over time, I got curious about how websites
              actually work, so I started learning to code. I began with the
              basics, like HTML and CSS, to build the foundation of my web
              development skills.
            </p>
            <br />
            <p className="lg:block hidden">
              Fast-forward to today, and As I got more into coding, I discovered
              JavaScript, which allows me to create interactive and cool
              features on websites. I didn't stop there; I also learned about
              popular tools like React and Nextjs, which helps me build websites
              faster and make them work well on different devices.
            </p>
          </div>
          <div className="">
            <img src="/images/img.png" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
