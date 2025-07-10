import React from "react";
import Modal from "react-modal";
import CoursesContent from "./CoursesContent"

Modal.setAppElement("#root");

const Courses = (props) => {
  return (
    <>
      <div className="container">
        <div className="nandini_tm_about">
          <div className="nandini_tm_title" style={{ marginBottom: "-20px" }}>
            <div className="title_flex">
              <div className="left">
                <span>Courses</span>
                <h3>
                  Coursework & Internships<strong style={{ color: "#0d98ba" }}>.</strong>
                </h3>
              </div>
            </div>
          </div>
          {/* End title */}
        </div>
      </div>
      {/* End .container */}

      <div className="nandini_tm_skillbox">
        <div className="container">
          <div className="in">
            <CoursesContent />
          </div>
        </div>
      </div>
      {/* End .nandini_tm_skillbox */}

      {/* /ABOUT */}
    </>
  );
};

export default Courses;
