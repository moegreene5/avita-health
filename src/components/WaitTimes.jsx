import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import {
  MdOutlineHealthAndSafety,
  MdOutlineMedicalServices,
  MdPregnantWoman,
} from "react-icons/md";

const WaitTimes = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        style={{
          background: "rgba(45,41,38,1)",
          padding: "1rem 0",
        }}
      >
        <div className="flex justify-center">
          <h2 className="text-white text-center sm:text-lg md:text-3xl lg:text-5xl">
            Services
          </h2>
          <span
            onClick={() => setVisible(!visible)}
            className="relative top-1/2 translate-y-1/2 left-1 cursor-pointer transition-opacity duration-300 ease-in-out"
          >
            <FaInfoCircle color="#f0b410" />
          </span>
        </div>
        {visible && (
          <div
            className={`px-2 transition-opacity duration-500 ease-in-out ${
              visible ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <p className="text-center text-white mt-3 text-sm">
              The Emergency Department (ED) wait times are approximate and
              provided for information purposes only. It is approximate, and
              based on a rolling average that is updated four times an hour and
              does not represent actual activity in the ED waiting room.
            </p>
            <p className="text-center text-white mt-1 text-sm">
              The ED wait time represents the time it takes from arrival until a
              patient is initially seen by a medical professional (Physician,
              Physician Assistant, or Nurse Practitioner). Patients are triaged
              upon their arrival in the ED. They are seen by a medical
              professional in an order based on their condition, complaint, and
              reason for their visit.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row">
        {/* primary core */}
        <div className="bucyrus py-5 border-b-2 border-white md:border-b-0 md:w-1/3 md:border-r-2">
          <div className="flex flex-row md:flex-col flex-grow-0 flex-shrink justify-center items-center text-white text-sm md:text-lg lg:text-2xl text-shadow">
            <h3 className="mr-4">
              <a className="text-nowrap" href="">
                PRIMARY CARE
              </a>
            </h3>
            <p className="flex items-center">
              <span>
                <MdOutlineHealthAndSafety size="2.4rem" />
              </span>
            </p>
          </div>
        </div>

        {/* maternity women */}
        <div className="gallion py-5 border-b-2 border-white md:border-b-0 md:w-1/3 md:border-r-2">
          <div className="flex flex-row md:flex-col flex-grow-0 flex-shrink justify-center items-center text-white text-sm md:text-lg lg:text-2xl text-shadow">
            <h3 className="mr-4">
              <a href="">MATERNITY WOMEN</a>
            </h3>
            <p className="flex items-center">
              <span>
                <MdPregnantWoman size="2.4rem" />
              </span>
            </p>
          </div>
        </div>

        {/* specialized consultation*/}
        <div className="ontario py-5 border-b border-white md:border-b-0 md:w-1/3">
          <div className="flex flex-row md:flex-col flex-grow-0 flex-shrink justify-center items-center text-white text-sm md:text-lg lg:text-2xl text-shadow">
            <h3 className="mr-4">
              <a href="">SPECIALIZED CONSULTATION</a>
            </h3>
            <p className="flex items-center flex-shrink">
              <span>
                <MdOutlineMedicalServices size="2.4rem" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitTimes;
