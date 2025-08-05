import React from "react";

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Top Hat",
    location: "Toronto, ON",
    duration: "Jan 2025 – Apr 2025",
    logo: "/assets/img/company/tophat.png",
  },
  {
    role: "Software Engineer Intern",
    company: "Meta",
    team: "Ads Manager Platform",
    location: "Menlo Park, CA",
    duration: "Sep 2024 – Dec 2024",
    logo: "/assets/img/company/meta.png",
  },
  {
    role: "Software Engineering Associate",
    company: "Boomerang Intelligence",
    location: "Toronto, ON",
    duration: "Jan 2024 – Apr 2024",
    logo: "/assets/img/company/boomerang.png",
  },
  {
    role: "Software Developer Intern",
    company: "Royal Bank of Canada",
    team: "Digital Tools & Credit Systems",
    location: "Toronto, ON",
    duration: "Sep 2022 – Dec 2022 & May 2023 – Aug 2023",
    logo: "/assets/img/company/rbc.png",
  },
];

const Experience = () => {
  return (
    <div className="nandini_tm_experience">
      <div className="nandini_tm_title">
        <div className="title_flex">
          <div className="left">
            <span>Experience</span>
            <h3>
              Work History<strong style={{ color: "#0d98ba" }}>.</strong>
            </h3>
          </div>
        </div>
      </div>

      <div className="experience_list">
        <ul>
          {experienceData.map((exp, i) => (
            <li key={i}>
              <div className="list_inner">
                <div className="logo_circle">
                  <img src={exp.logo} alt={`${exp.company} logo`} />
                </div>
                <div className="experience_info">
                  <h4>
                    {exp.role} @ {exp.company}
                  </h4>
                  {exp.team && <span className="team">{exp.team}</span>}
                  <span className="duration">{exp.duration}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
