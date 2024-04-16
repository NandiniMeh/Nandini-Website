import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import HomeLight from './views/all-home-version/HomeLight';
import CustomCursor from "./components/custom/CustomCursor";

const App = () => {
  const [isCursorEnabled, setIsCursorEnabled] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="nandini_tm_all_wrap">
      {isCursorEnabled && <CustomCursor />}
      <HomeLight onCursorToggle={setIsCursorEnabled} />
    </div>
  );
};

export default App;
