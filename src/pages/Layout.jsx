import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import "../App.css";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
