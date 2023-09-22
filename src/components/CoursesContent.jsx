import React from "react";

const CoursesContent = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "1A: Fall 2020",
      content: [
        " CS135: Designing Functional Programs",
        " MATH135: Algebra for Honours Mathematics",
        " MATH137: Calculus 1",
        " ENGL108D: Digital Lives",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: " 1B: Spring 2021",
      content: [
        " CS136: Elementary Algorithm Design and Data Abstraction",
        " MATH136: Linear Algebra 1 ",
        " MATH138: Calculus 2",
        " PSYCH101: Introductory Psychology",
      ],
    },
    {
      id: 3,
      colClass: "left",
      title: "2A: Fall 2021",
      content: [
        " CS246: Object-Oriented Software Development",
        " CS245: Logic and Computation",
        " ENGL293: Digital Media Studies",
        " SCI206:  Physics of How Things Work",
        " STAT230: Probability",
        " PD1: Career Fundamentals",
      ],
    },
    {
      id: 4,
      colClass: "right",
      title: "Winter 2022",
      content: [" Software Developer: Arthur Health"],
    },
    {
      id: 5,
      colClass: "left",
      title: "2B: Spring 2022",
      content: [
        " CS241: Foundations of Sequential Programs",
        " CS251: Computer Organization and Design",
        " CS240: Data Structures and Data Management",
        " PSYCH207: Cognitive Processes",
      ],
    },
    {
      id: 6,
      colClass: "right",
      title: "Fall 2022",
      content: [
        " UI Developer: Royal Bank of Canada",
        "MATH239: Introduction to Combinatorics",
      ],
    },
    {
      id: 7,
      colClass: "left",
      title: "3A: Winter 2023",
      content: [
        "CS350: Operating Systems",
        "STAT231: Statistics",
        "CS341: Algorithms",
        "CS349: User Interfaces",
        "SCI207: Physics, the Universe, and Everything",
      ],
    },
    {
      id: 8,
      colClass: "right",
      title: "Spring 2023",
      content: [
        "PD7: Conflict Resolution",
        "Full Stack Developer: Royal Bank of Canada",
      ],
    },
    {
      id: 9,
      colClass: "left",
      title: "3B: Fall 2023",
      content: [
        "CS449: Human-Computer Interaction",
        "CS346: Application Development",
        "CS486: Introduction to Artificial Intelligence",
        "ENVS195: Introduction to Environmental Studies",
        "CLAS104: Classical Mythology",
      ],
    },
    // Add more data similarly if needed.
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const columnStyle = {
    width: "50%", // 50% ensures it takes half the space, making 2 columns side by side
    marginBottom: "55px",
  };

  return (
    <div style={containerStyle}>
      {knowledgeContent.map((item) => (
        <div style={columnStyle} key={item.id}>
          <div className="nandini_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="nandini_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/svg/rightarrow.svg"
                      }
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesContent;
