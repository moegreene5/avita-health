import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const navigate = useNavigate();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });

        navigate(location.pathname, { replace: true });

        lastHash.current = "";
      }, 100);
    }
  }, [location, navigate]);

  return null;
}

export default ScrollToAnchor;
