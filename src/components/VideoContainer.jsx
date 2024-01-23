import avitaHealth from "../assets/avitahealth2.mp4";

const VideoContainer = () => {
  return (
    <>
      <div className="sm:h-full md:h-full lg:h-1/2 relative overflow-hidden">
        <video
          className="w-full h-full"
          preload="none"
          autoPlay
          loop
          playsInline
          muted
          src={avitaHealth}
        ></video>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="sm:text-base md:text-2xl lg: text-3xl lg:text-5xl mb-4 text-shadow text-center">
            About Life. About You.
          </h1>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
