import avitaHealth from "../assets/avitahealth2.mp4";
// import avita from "../assets/Avitahealth-Video.mp4";

const VideoContainer = () => {
  return (
    <>
      <div className="video-height relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          preload="none"
          autoPlay
          loop
          playsInline
          muted
          src={avitaHealth}
        ></video>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl mb-4 text-shadow text-center">
            Bringing Care to You, Anytime, Anywhere.
          </h1>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
