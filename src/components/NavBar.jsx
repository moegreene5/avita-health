// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";
// import avitaLogo from "/src/Avita-Health-System-Logo_web.svg";
// import avita from "../assets/AvitaHealth.png";
import avita from "../assets/alogo.jpeg";

const NavBar = () => {
  const [toggled, setToggle] = useState(false);

  const list = [
    { title: "HOME", link: "/" },
    { title: "SERVICES", link: "#services" },
    { title: "MY PORTAL", link: "https://avital-care.vercel.app/login" },
    { title: "F.A.Q", link: "#faq" },
    { title: "CONTACT US", link: "#contact" },
  ];
  return (
    <>
      <div className="py-3 px-4 border-b-2 border-blue-700">
        <div className="flex justify-between items-center flex-wrap">
          <a href="/">
            <img
              className="w-36 h-12 object-cover"
              src={avita}
              alt="website logo"
            />
          </a>

          <div className="flex justify-between items-center">
            <div className="mr-3 hidden md:block">
              <button className="p-3 rounded-lg text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white">
                <a href="https://avital-care.vercel.app/signup">Sign Up</a>
              </button>
            </div>
            <button onClick={() => setToggle(true)}>
              <span className="text-3xl text-blue-900 md:hidden">
                <AiOutlineMenu />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="blue hidden md:block">
        <ul className="flex justify-center">
          {list.map((listItem, index) => (
            <li
              className="mx-3 p-3 text-base lg:text-lg text-white hover:text-blue-300 hover:cursor-pointer transition-all"
              key={index}
            >
              <a href={listItem.link}>{listItem.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <SideBar toggled={toggled} setToggle={setToggle} />
    </>
  );
};

export default NavBar;
