import hands from "../assets/hand_icon-64.webp";
import location from "../assets/location_icon-64.webp";
import book from "../assets/BookIcon-64.webp";
import stethescope from "../assets/stethescopeicon-64.webp";

const HomeIcons = () => {
  const items = [
    {
      icon: location,
      heading: "LOCATION",
      paragraph: "Find the nearest hospital or clinic",
    },
    {
      icon: hands,
      heading: "CLASSES & GROUPS",
      paragraph: "Education for the community",
    },
    {
      icon: stethescope,
      heading: "SERVICES",
      paragraph: "Specialized care, close to home",
    },
    {
      icon: book,
      heading: "HEALTH LIBRARY",
      paragraph: "A collection of health articles",
    },
  ];
  return (
    <div className="py-12 px-6">
      <div className="home-icons text-center">
        {items.map((item, index) => (
          <div
            className="rounded-md p-6 hover-icons"
            style={{ border: "3px solid #a9c47f" }}
            key={index}
          >
            <a
              className="flex flex-col justify-center items-center text-center"
              href="/"
            >
              <img className="text-center" src={item.icon} alt="" />
              <h2 className="text-2xl my-1">{item.heading}</h2>
              <p className="mb-4 hover">{item.paragraph}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeIcons;
