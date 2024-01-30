import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import "../App.css";
import ScrollToAnchor from "../components/ScrollToAnchor";

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
