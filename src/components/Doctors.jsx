import { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import avita from "../assets/av4.png";
import useDoctors from "../hooks/useDoctors";
import useSpecialties from "../hooks/useSpecialties";
import doctorPic from "../assets/telehealth.jpg";

const Doctors = () => {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const { data: doctors, isLoading } = useDoctors();
  const { data: specialties } = useSpecialties();

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

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleSpecialtyChange = (selectedOption) => {
    setSelectedSpecialty(selectedOption);
  };

  let filteredDoctors = doctors?.data.data;

  if (searchText)
    filteredDoctors = doctors?.data.data.filter((doctor) =>
      doctor.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
  else if (selectedSpecialty)
    filteredDoctors = doctors.data.data.filter(
      (doctor) => doctor.specialty.name === selectedSpecialty.value
    );

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
            options={specialties?.data.data}
            value={selectedSpecialty}
            onChange={handleSpecialtyChange}
            isSearchable={true}
            placeholder="Filter by Service"
            styles={customStyles}
          />
          <button
            onClick={() => {
              setSearchText("");
              setSelectedSpecialty(null);
            }}
            type="reset"
            className="p-2 px-4 bg-gray-500 text-white m-4"
          >
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
          {/* loading skeleton */}
          {isLoading &&
            items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-300 to-blue-200 animate-pulse shadow-lg p-4 rounded-md h-80"
              ></div>
            ))}

          {/* doctor cards */}
          {filteredDoctors?.map((doctor, index) => (
            <div className="justify-self-center" key={index}>
              <img
                className="object-cover h-72"
                src={doctor.img ? doctor.img : doctorPic}
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
                  {doctor.name}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">
                  {doctor.specialty.name}
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  {doctor.telephone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
