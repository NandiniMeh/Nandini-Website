import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " ReactJs, Javascript, HTML/CSS, jQuery",
        " Figma, Material UI, Postman",
        " Kotlin, JavaFX, IntelliJ",
        " C++/C, Bash, Shell",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Creating UI/UX designs",
        " Reading",
        " Vinyl record hunting in Waterloo/Toronto",
        " Learning! ",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
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
                      src="assets/img/svg/rightarrow.svg"
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
    </>
  );
};

export default KnowledgeInterest;
