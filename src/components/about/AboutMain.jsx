import React from "react";
import Modal from "react-modal";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";

Modal.setAppElement("#root");

const AboutMain = () => {
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

          <Intro />
          <div className="nandini_tm_short_info">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <div className="nandini_tm_button" data-position="left">
            <a href="assets/img/nandini_resume.pdf" download>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="nandini_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End .nandini_tm_skillbox */}

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
