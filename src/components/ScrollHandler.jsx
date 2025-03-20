import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        duration: 1000,
      });
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
