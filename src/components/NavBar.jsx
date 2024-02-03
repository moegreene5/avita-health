// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import avitaLogo from "../assets/av4.png";

const NavBar = () => {
  const [toggled, setToggle] = useState(false);

  const list = [
    { title: "HOME", link: "" },
    { title: "SERVICES", link: "/#services" },
    { title: "DOCTORS", link: "/doctors" },
    { title: "MY PORTAL", link: "https://avital-care.vercel.app/login" },
    { title: "FAQ", link: "/#faq" },
    { title: "CONTACT US", link: "/#contact" },
  ];
  return (
    <>
      <div
        style={{ borderBottomColor: "#004680" }}
        className="py-3 px-4 pl-0 border-b-2 lg:border-b-0"
      >
        <div className="flex justify-between items-center flex-wrap">
          <Link to="/">
            <img
              className="w-36 h-12 object-cover"
              src={avitaLogo}
              alt="website logo"
            />
          </Link>

          <div className="flex justify-between items-center">
            <div className="mr-3 hidden md:block">
              <button className="p-3 rounded-lg blue-border">
                <a href="https://avital-care.vercel.app/signup">Sign Up</a>
              </button>
            </div>
            <button onClick={() => setToggle(true)}>
              <span className="text-3x font-bold md:hidden">
                <AiOutlineMenu size="2rem" color="#004680" />
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
              {listItem.title === "DOCTORS" || listItem.title === "HOME" ? (
                <Link onClick={() => setToggle(false)} to={listItem.link}>
                  {listItem.title}{" "}
                </Link>
              ) : listItem.title === "MY PORTAL" ? (
                <a onClick={() => setToggle(false)} href={listItem.link}>
                  {listItem.title}
                </a>
              ) : (
                <Link to={listItem.link}>{listItem.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <SideBar toggled={toggled} setToggle={setToggle} />
    </>
  );
};

export default NavBar;
