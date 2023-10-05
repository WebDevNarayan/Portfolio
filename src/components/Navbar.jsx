import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Div = styled.div`
  top: 0;
  align-items: center;
  height: 100px;

  .logo_style {
    color: ff6200;
  }

  .menu {
    font-size: 1rem;
  }
  .menu > a:hover {
    color: #ff6200;
  }
  .menu > a:active {
    color: #ff6200;
  }
`;
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Div className="font-mont px-10 py-1 flex justify-between w-full">
      <div className=" container ">
        <div className="flex items-center py-4 md:justify-start md:space-x-2">
          <div className="-my-2 -mr-2 lg:hidden md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 focus:outline-none hover:text-gray-950"
            >
              {showMenu ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden items-center justify-between md:flex md:flex-1">
            <div className="text-3xl font-mont_alter font-semibold">
              <a href="#">
                <span className="text-orange-600">n.</span>dura
              </a>
            </div>
            <div className="flex justify-between gap-5 mr-10`">
              <div className="menu">
                <ul>
                  <a href="#main">Main</a>
                </ul>
              </div>
              <div className="menu">
                <a href="portfolio">Portfolio</a>
              </div>

              <div className="menu">
                <a href="#services">My Services and Workflow</a>
              </div>
              <div className="menu">
                <a href="#contacts">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-gray-400 px-4 py-8">
            <div className="flex justify-between mb-6">
              <div className="text-3xl font-semibold">
                <a href="#">
                  <span className="logo_style">n.</span>dura
                </a>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-700 focus:outline-none"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 font-semibold">
              <div className="menu">
                <a href="#">Home</a>
              </div>
              <div className="menu">
                <a href="#">Featured Work</a>
              </div>

              <div className="menu">
                <a href="#">Blog</a>
              </div>

              <div className="menu">
                <a href="#">About</a>
              </div>
              <div className="menu">
                <a href="#">Contact</a>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </Div>
  );
};

export default Navbar;
