/* eslint-disable react/prop-types */
const Card = ({ image, heading }) => {
  return (
    <div
      style={{
        background: "#e7e7e7",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="rounded-lg overflow-hidden mx-4"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <a className="outline-none" href="/">
            <img className="object-cover w-full" src={image} alt="" />
          </a>
        </div>
        <div className="min-h-14 my-4 mx-2">
          <h3 style={{ color: "#004680" }} className="text-lg font-bold">
            <a className="hover:underline" href="/">
              {" "}
              {heading}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
