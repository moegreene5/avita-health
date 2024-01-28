/* eslint-disable react/prop-types */
import { IoMdExit } from "react-icons/io";

const SideBar = ({ toggled, setToggle }) => {
  const list = [
    { title: "HOME", link: "/" },
    { title: "SERVICES", link: "#services" },
    { title: "MY PORTAL", link: "https://avital-care.vercel.app/login" },
    { title: "F.A.Q", link: "#faq" },
    { title: "CONTACT US", link: "#contact" },
  ];
  return (
    <div
      className={
        toggled
          ? "side-background fixed right-0 top-0 h-screen z-50 pl-4 pr-12 py-8 flex flex-col justify-start items-start md:hidden transition-all ease-in duration-300"
          : "side-background fixed right-0 top-0 h-screen z-50 pl-4 pr-12 py-8 hidden flex-col justify-start items-start md:hidden transition-all ease-out duration-300"
      }
    >
      <button
        onClick={() => setToggle(false)}
        className="text-3xl text-white text-right hover:scale-125 transition-transform hover:cursor-pointer active:scale-75 mb-2"
      >
        <IoMdExit />
      </button>

      <ul className="w-full">
        {list.map((listItem, index) => (
          <li
            className={
              index === list.length - 1
                ? "text-white text-lg p-3 w-auto hover:bg-gray-900 hover:cursor-pointer transition-all"
                : "text-white text-lg border-b-4 border-white p-3 w-auto hover:bg-gray-900 hover:cursor-pointer transition-all"
            }
            key={index}
          >
            <a onClick={() => setToggle(false)} href={listItem.link}>
              {listItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
