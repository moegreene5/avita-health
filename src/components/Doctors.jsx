import { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Doctors = () => {
  const [visible, setVisible] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [searchText, setSearchText] = useState("");

  const nameRef = useRef(null);

  console.log(searchText);

  const items = [
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
    },
    {
      name: "Kevin Durant",
      img: "https://source.unsplash.com/collection/190727/800x600?2",
      profession: "Basketballer",
    },
    {
      name: "Jayson Tatum",
      img: "https://source.unsplash.com/collection/190727/800x600?3",
      profession: "Basketballer",
    },
    {
      name: "Luka Donic",
      img: "https://source.unsplash.com/collection/190727/800x600?4",
      profession: "Basketballer",
    },
    {
      name: "Jaylen Brown",
      img: "https://source.unsplash.com/collection/190727/800x600?5",
      profession: "Basketballer",
    },
    {
      name: "Anthony Edwards",
      img: "https://source.unsplash.com/collection/190727/800x600?6",
      profession: "Basketballer",
    },
    {
      name: "Kyrie Irving",
      img: "https://source.unsplash.com/collection/190727/800x600?7",
      profession: "Basketballer",
    },
    {
      name: "Mo Bamba",
      img: "https://source.unsplash.com/collection/190727/800x600?8",
      profession: "Basketballer",
    },
    {
      name: "Scottie Barnes",
      img: "https://source.unsplash.com/collection/190727/800x600?9",
      profession: "Basketballer",
    },
    {
      name: "Tyrese Maxey",
      img: "https://source.unsplash.com/collection/190727/800x600?10",
      profession: "Basketballer",
    },
    {
      name: "Trae Young",
      img: "https://source.unsplash.com/collection/190727/800x600?11",
      profession: "Basketballer",
    },
    {
      name: "Joel Embiid",
      img: "https://source.unsplash.com/collection/190727/800x600?12",
      profession: "Basketballer",
    },
  ];

  const specialities = [
    "surgeon",
    "dentist",
    "psr",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
    "psychologist",
  ];

  return (
    <>
      <div className="text-center bg-slate-300">
        <div
          onClick={() => setVisible(!visible)}
          className="lg:hidden bg-slate-600 text-white p-3 cursor-pointer relative"
        >
          <h3>Filter</h3>
          {visible ? (
            <FaChevronDown className="absolute top-1/2 right-6 transform -translate-y-1/2" />
          ) : (
            <FaChevronRight className="absolute top-1/2 right-6 transform -translate-y-1/2" />
          )}
        </div>
        <form
          action=""
          className={`lg:block ${
            visible
              ? "block transition-opacity duration-500 ease-in"
              : "hidden transition-opacity duration-500 ease-out"
          }`}
        >
          <input
            className="m-4 p-2 outline-none border-2 border-gray-400"
            placeholder="Filter by Name"
            type="text"
            ref={nameRef}
          />
          <span className="relative inline-block">
            <button
              onClick={() => setDropDown(!dropDown)}
              type="button"
              className=" bg-white m-4 p-2 pr-12 outline-none border-2 border-gray-400 text-gray-400 relative"
            >
              Filter by Service
              {dropDown ? (
                <FaChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2" />
              ) : (
                <FaChevronRight className="absolute top-1/2 right-2 transform -translate-y-1/2" />
              )}
            </button>
            {/* {dropDown && (
              <div className="p-6 pt-1 absolute top-full bg-white max-h-72 overflow-y-scroll z-50 text-base">
                {specialities.map((specialty, index) => (
                  <h3 key={index}>
                    <input type="checkbox" className="mr-1 my-3" />
                    {specialty}
                  </h3>
                ))}
              </div>
            )} */}
          </span>

          <button type="reset" className="p-2 px-4 bg-gray-500 text-white m-4">
            Clear Filter
          </button>
          <button
            style={{ background: "#004680" }}
            type="button"
            className="p-2 px-4 text-white m-4"
            onClick={() => {
              setSearchText(nameRef.current.value);
              nameRef.current.value = "";
            }}
          >
            Filter Results
          </button>
        </form>
      </div>

      <div className="p-6">
        <h1 className="text-center mb-8 text-5xl" style={{ color: "#004680" }}>
          Find a Doctor
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {/* {items.map((item, index) => (
            <div className="justify-self-center" key={index}>
              <img className="object-cover h-72" src={item.img} alt="" />
              <div
                style={{ color: "#004680" }}
                className="p-4 bg-slate-100 text-center"
              >
                <h3 className="text-3xl">{item.name}</h3>
                <p className="text-sm md:text-lg lg:text-2xl">
                  {item.profession}
                </p>
              </div>
            </div>
          ))} */}
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-gradient-to-r from-blue-300 to-blue-200 animate-pulse shadow-lg p-4 rounded-md h-80"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
