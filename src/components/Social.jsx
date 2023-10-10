import React from "react";

const Social = () => {
  return (
    <>
      <div className="">
        <pre className="text-right text-orange-600">&lt;&gt;</pre>
        <div className="">
          <h1 className="text-right font-mont_alter text-4xl font-bold">
            Web-
            <br />
            Developer
          </h1>
        </div>
        <br />
        <div className="font-mont text-right text-[#ffffffbd]">
          <p className="">naryandura5@gmail.com</p>
          <p className="">+977 9866050382</p>
        </div>
        <div className="mt-4">
          <ul className="flex flex-row-reverse text-right  font-mont gap-4 font-bold">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/narayan.dura.35"
              >
                FB
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/WebDevNarayan">
                GH
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/narayan_dura01/"
              >
                IG
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/narayan-dura-b04a8a212/"
              >
                LI
              </a>
            </li>
          </ul>
          <pre className=" text-right text-orange-600 mt-1">&lt;/&gt;</pre>
        </div>{" "}
      </div>
    </>
  );
};

export default Social;
