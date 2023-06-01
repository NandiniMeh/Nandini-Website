import React from "react";

const SocialShare = [
  {
    iconName: "linkedln",
    link: "https://www.linkedin.com/in/nandinimehrotra/",
  },
  { iconName: "github", link: "https://github.com/NandiniMeh" },
  {
    iconName: "mailme",
    link: "mailto:n3mehrot@uwaterloo.ca",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={
                  process.env.PUBLIC_URL +
                  `/assets/img/svg/social/${val.iconName}.svg`
                }
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
