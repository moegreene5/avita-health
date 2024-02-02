/* eslint-disable react/prop-types */
import { IoMdExit } from "react-icons/io";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ toggled, setToggle }) => {
  const list = [
    { title: "HOME", link: "" },
    { title: "SERVICES", link: "/#services" },
    { title: "DOCTORS", link: "/doctors" },
    { title: "MY PORTAL", link: "https://avital-care.vercel.app/login" },
    { title: "FAQ", link: "/#faq" },
    { title: "CONTACT US", link: "/#contact" },
    { title: "SIGN UP", link: "https://avital-care.vercel.app/signup" },
  ];

  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setToggle]);

  return (
    <div
      ref={sideBarRef}
      style={{ zIndex: "99999999" }}
      className={`side-background fixed right-0 top-0 h-screen z-50 pl-4 pr-12 py-8 flex flex-col justify-start items-start md:hidden ${
        toggled
          ? "transition-transform ease-in duration-300 transform translate-x-0"
          : "transition-transform ease-out duration-300 transform translate-x-full"
      }`}
    >
      <button
        onClick={() => setToggle(false)}
        className="text-3xl text-white text-right hover:scale-125 transition-transform hover:cursor-pointer active:scale-75 mb-4"
      >
        <IoMdExit />
      </button>

      <ul className="w h-full">
        {list.map((listItem, index) => (
          <li
            className={`${
              index === list.length - 1
                ? "text-white text-lg p-3 w-auto hover:bg-blue-900 hover:cursor-pointer transition-all"
                : "text-white text-lg border-b-2 border-white p-3 w-auto hover:bg-blue-800 hover:cursor-pointer transition-all"
            }`}
            key={index}
          >
            {listItem.title === "DOCTORS" || listItem.title === "HOME" ? (
              <Link onClick={() => setToggle(false)} to={listItem.link}>
                {listItem.title}{" "}
              </Link>
            ) : listItem.title === "MY PORTAL" ||
              listItem.title === "SIGN UP" ? (
              <a onClick={() => setToggle(false)} href={listItem.link}>
                {listItem.title}
              </a>
            ) : (
              <Link
                onClick={() => {
                  setToggle(false);
                }}
                to={listItem.link}
              >
                {listItem.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
