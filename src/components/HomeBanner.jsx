import banner from "../assets/blue-banner.jpeg";
import foundation from "../assets/foundation-banner.webp";

const HomeBanner = () => {
  return (
    <>
      {/* mobile */}
      <div className="lg:hidden relative text-center text-white">
        <img src={foundation} alt="" />
        <div
          style={{ background: "#004680" }}
          className="relative right-auto bottom-auto px-1 py-4 transform-none w-full"
        >
          <h2 className="mb-4 font-bold heading2-mobile">
            Avita Health Foundation
          </h2>
          <p className="mb-4">
            Inspiring philanthropy and providing financial support to Galion,
            Bucyrus, and Ontario Hospitals in order to enhance healthcare
            services and to improve the well being of the residents of our
            communities.
          </p>
          <a
            className="inline-block border-4 border-white rounded-lg bg-transparent px-4 py-1.5 text-lg hover:bg-white hover:text-green-900"
            href="/"
          >
            <button>Donate Today!</button>
          </a>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden lg:block relative text-center text-white">
        <img className="w-full" src={banner} alt="" />
        <div className="absolute text-center bottom-1/2 translate-y-1/2 w-full right-auto py-8">
          <h2 className="text-size font-bold mb-6 relative z-10">
            Avita Health Foundation
          </h2>
          <p className="mb-4">
            Inspiring philanthropy and providing financial support to Galion,
            Bucyrus, and Ontario Hospitals in order to enhance healthcare
            services and to improve the well being of the residents of our
            communities.
          </p>
          <a
            href="/"
            className="inline-block border-4 border-white rounded-lg text-a text-padding bg-transparent hover:bg-white hover:text-green-900 mb-3"
          >
            <button>Donate Today!</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
