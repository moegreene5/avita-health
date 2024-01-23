import avitaHealth from "../assets/avitahealth.mp4";

const VideoContainer = () => {
  return (
    <>
      <div className="video-height relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
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
