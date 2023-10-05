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
        <div className="font-mont text-right">
          <p className="">naryandura5@gmail.com</p>
          <p className="">+977 9866050382</p>
        </div>
        <div className="mt-4">
          <ul className="flex flex-row-reverse text-right  font-mont gap-4 font-bold">
            <li>
              <a href="#">TW</a>
            </li>
            <li>
              <a href="#">GH</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
            <li>
              <a href="#">LI</a>
            </li>
          </ul>
          <pre className=" text-right text-orange-600 mt-1">&lt;/&gt;</pre>
        </div>{" "}
      </div>
    </>
  );
};

export default Social;
