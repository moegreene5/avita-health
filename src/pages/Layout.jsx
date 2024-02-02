import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ScrollToAnchor from "../components/ScrollToAnchor";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToAnchor />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
