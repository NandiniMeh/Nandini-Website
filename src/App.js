import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import HomeLight from './views/all-home-version/HomeLight';
import CustomCursor from "./components/custom/CustomCursor";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="nandini_tm_all_wrap">
      <CustomCursor />
      <HomeLight />
    </div>
  );
};

export default App;
