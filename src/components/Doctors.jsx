import { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import avita from "../assets/av4.png";

const Doctors = () => {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const nameRef = useRef(null);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
    }),
    menu: (provided) => ({
      ...provided,
      width: 200,
    }),
  };

  const items = [
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
      number: "08105833171",
      email: "agbasiifeanyi@gmail.com",
    },
  ];

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
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
          className={`lg:flex items-center justify-center flex-wrap ${
            visible
              ? "flex transition-opacity duration-500 ease-in"
              : "hidden transition-opacity duration-500 ease-out"
          }`}
        >
          <input
            className="m-4 p-2 outline-none border-2 border-gray-400"
            placeholder="Filter by Name"
            type="text"
            ref={nameRef}
          />

          <Select
            options={options}
            isSearchable={true}
            placeholder="Filter by Service"
            styles={customStyles}
          />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div className="justify-self-center" key={index}>
              <img
                className="object-cover h-72 rounded-2xl overflow-hidden"
                src={item.img}
                alt=""
              />
              <div
                style={{ color: "#004680" }}
                className="p-4 bg-white text-left border-2 border-slate-400 relative"
              >
                <img
                  className="h-16 w-16 object-cover absolute bottom-2 right-2"
                  src={avita}
                  alt=""
                />
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">
                  {item.profession}
                </p>
                <p className="text-sm md:text-base lg:text-lg">{item.number}</p>
              </div>
            </div>
          ))}
          {/* {items.map((item) => (
            <div
              key={item.name}
              className="bg-gradient-to-r from-blue-300 to-blue-200 animate-pulse shadow-lg p-4 rounded-md h-80"
            ></div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Doctors;
