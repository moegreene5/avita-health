// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import SideBar from "./SideBar";
import avitaLogo from "/src/Avita-Health-System-Logo_web.svg";
// import avita from "../assets/AvitaHealth.png";

const NavBar = () => {
  const [toggled, setToggle] = useState(false);

  const list = [
    "FIND A DOCTOR",
    "MY CHART",
    "YOUR BILL",
    "CAREERS",
    "CONTACT US",
  ];
  return (
    <>
      <div className="py-3 px-4 border-b-2 border-green-700">
        <div className="flex justify-between items-center flex-wrap">
          <img className="w-48 h-14" src={avitaLogo} alt="website logo" />

          <div className="flex justify-between items-center">
            <div className="mr-3 hidden md:block">
              <form className="relative flex items-center" action="">
                <input
                  className="border-2 border-gray-300 rounded-xl mt-1 p-4 py-2 bg-transparent outline-none"
                  type="text"
                  placeholder="Search..."
                />
                <span className="absolute  right-2 text-2xl border-l-2 border-gray-300 cursor-pointer p-2 text-green-900">
                  <IoIosSearch />
                </span>
              </form>
            </div>
            <button onClick={() => setToggle(true)}>
              <span className="text-3xl text-green-900 md:hidden">
                <AiOutlineMenu />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="green hidden md:block">
        <ul className="flex justify-center">
          {list.map((listItem, index) => (
            <li
              className="mx-3 p-3 text-base lg:text-lg text-white hover:bg-green-900 hover:cursor-pointer transition-all"
              key={index}
            >
              <a href="">{listItem}</a>
            </li>
          ))}
        </ul>
      </div>
      <SideBar toggled={toggled} setToggle={setToggle} />
    </>
  );
};

export default NavBar;
