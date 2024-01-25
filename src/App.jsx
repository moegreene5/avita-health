import "./App.css";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HomeBanner from "./components/HomeBanner";
import HomeIcons from "./components/HomeIcons";
import NavBar from "./components/NavBar";
import VideoContainer from "./components/VideoContainer";
import WaitTimes from "./components/WaitTimes";

function App() {
  return (
    <>
      <NavBar />
      <VideoContainer />
      <WaitTimes />
      <Banner />
      <Carousel />
      <HomeBanner />
      <HomeIcons />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
