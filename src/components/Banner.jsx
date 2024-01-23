import banner from "../assets/pharmacy-banner.webp";
import pharm from "../assets/pharm.jpg";

const Banner = () => {
  return (
    <>
      {/* mobile */}
      <div className="flex flex-col-reverse lg:hidden">
        <div style={{ background: "#275d38" }}>
          <div className="flex flex-col banner-sizing text-white justify-center items-center text-center">
            <h2 className="font-black text-2xl mb-1">Avita Ontario Pharmacy</h2>
            <p className="text-2xl italic font-serif font-extralight mb-1">
              Check out our monthly sales &{" "}
              <span
                style={{ fontFamily: "myriad-pro,sans-serif" }}
                className="font-black not-italic"
              >
                Hot Deals!
              </span>
            </p>
            <button className="border-2 border-white rounded-md p-3 my-3 hover:bg-white hover:text-green-800">
              See This Month&apos;s Deals!
            </button>
          </div>
        </div>

        <div className="h-64">
          <img
            src={banner}
            alt="A picture of a Pharmacy"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* desktop */}
      <div className="flex hidden lg:block">
        <div className="flex h-96">
          <div
            className="w-1/2 h-full"
            style={{ background: "#275d38", borderRight: "5px solid #a9c47f" }}
          >
            <div className="flex flex-col p-10 text-white justify-center items-center h-full">
              <h2 className="font-black text-3xl mb-6 text-center">
                Avita Ontario Pharmacy
              </h2>
              <p className="text-2xl italic font-serif font-extralight mb-4 text-nowrap">
                Check out our monthly sales &{" "}
                <span
                  style={{ fontFamily: "myriad-pro,sans-serif" }}
                  className="font-black not-italic"
                >
                  Hot Deals!
                </span>
              </p>
              <button className="text-2xl border-2 border-white rounded-md p-3 my-3 hover:bg-white hover:text-green-800">
                See This Month&apos;s Deals!
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src={banner}
              alt="A picture of a Pharmacy"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
