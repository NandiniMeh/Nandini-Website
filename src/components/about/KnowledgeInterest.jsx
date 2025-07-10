import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        "React.js, TypeScript, JavaScript, HTML/CSS, jQuery",
        "Figma, Material UI, Postman, Git, Jenkins",
        "Python, SQL, Prisma, Node.js",
        "C/C++, Bash, Shell scripting",
        "Jira, Linear, Jest, React Testing Library",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        "Designing expressive UI/UX experiences",
        "Reading fiction, essays, and tech blogs",
        "Vinyl record hunting across Waterloo & Toronto",
        "Learning new tools, frameworks, and creative skills",
        "Exploring the overlap between code and creativity",
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
    </>
  );
};

export default KnowledgeInterest;
