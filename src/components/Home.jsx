import React from "react";
import Social from "./Social";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="nandini_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/slider/Me.jpg)`,
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">
              Nandini Mehrotra
              <span className="period" style={{ color: "#0d98ba" }}>
                .
              </span>
            </h3>
            <div
              className="typewriter-home"
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                fontSize: "20px",
                marginBottom: "20px",
                fontFamily: "Montserrat",
                fontWeight: "normal",
              }}
            >
              <span style={{ marginRight: "6px" }}>I'm</span>
              <Typewriter
                options={{
                  strings: [
                    "a Software Developer",
                    "a Web Designer",
                    "a FullStack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="job">
              Computer Science student at the University of Waterloo exploring
              user interface design and development.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
