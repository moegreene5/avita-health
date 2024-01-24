/* eslint-disable react/prop-types */
import { IoMdExit } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const SideBar = ({ toggled, setToggle }) => {
  const list = ["HOME", "SERVICES", "MY PORTAL", "F.A.Q", "CONTACT US"];

  return (
    <div
      style={{ backgroundColor: "rgba(128, 128, 128, 0.9)" }}
      className={
        toggled
          ? "bg-gray-700 fixed right-0 top-0 h-screen  z-50 pl-4 pr-12 py-8 flex flex-col justify-start items-start md:hidden transition-all ease-in"
          : "bg-gray-700 fixed right-0 top-0 h-screen  z-50 pl-4 pr-12 py-8 hidden flex-col justify-start items-start md:hidden transition-all ease-out"
      }
    >
      <button
        onClick={() => setToggle(false)}
        className="text-3xl text-white text-right hover:scale-125 transition-all hover:cursor-pointer active:scale-75 mb-2"
      >
        <IoMdExit />
      </button>
      <form className="relative flex items-center mb-2" action="">
        <input
          className="border-2 border-gray-300 rounded-xl mt-1 p-4 py-2 bg-transparent outline-none text-white"
          type="text"
          placeholder="Search..."
        />
        <span className="absolute  right-2 text-2xl border-l-2 border-gray-300 cursor-pointer p-2 text-white">
          <IoIosSearch />
        </span>
      </form>
      <ul className="w-full">
        {list.map((listItem, index) => (
          <li
            className={
              index === list.length - 1
                ? "text-white text-lg p-3 w-auto hover:bg-gray-900 hover:cursor-pointer"
                : "text-white text-lg border-b-4 border-white p-3 w-auto hover:bg-gray-900 hover:cursor-pointer"
            }
            key={index}
          >
            <a href="">{listItem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
