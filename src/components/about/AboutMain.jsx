import React from "react";
import Modal from "react-modal";
import Intro from "./Intro";
import Experience from "./Experience";

Modal.setAppElement("#root");

const AboutMain = (props) => {
  return (
    <>
      <div className="container">
        <div className="nandini_tm_about">
          <div className="nandini_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>
                  About Me<strong style={{ color: "#0d98ba" }}>.</strong>
                </h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro {...props} />

          <div className="nandini_tm_short_info">
            <Experience />
          </div>
          {/* End experience section */}
        </div>
      </div>
      {/* End .container */}
    </>
  );
};

export default AboutMain;
