import React from "react";

const SocialShare = [
  {
    iconName: "linkedln",
    link: "https://www.linkedin.com/in/nandinimehrotra/",
  },
  { iconName: "github", link: "https://github.com/NandiniMeh" },
  {
    iconName: "mailme",
    link: `mailto:n3mehrot@uwaterloo.ca?subject=You%20Hooked%20Me%20—%20Let%E2%80%99s%20Talk%20About%20an%20Opportunity&body=Hi%20Nandini%2C%0D%0A%0D%0AI%20stumbled%20upon%20your%20portfolio%20and%20got%20properly%20hooked%20—%20and%20not%20just%20by%20the%20React%20kind.%20It%E2%80%99s%20rare%20to%20find%20work%20that%E2%80%99s%20technically%20strong%20and%20visually%20thoughtful%20without%20overdoing%20either.%0D%0A%0D%0AAt%20%5BCompany%20Name%5D%2C%20we%E2%80%99re%20building%20some%20exciting%20things%20and%20think%20someone%20with%20your%20skillset%20(and%20attention%20to%20detail)%20could%20make%20real%20impact.%0D%0A%0D%0AI%E2%80%99d%20love%20to%20hear%20more%20about%20what%20you're%20looking%20for%20next%20—%20and%20whether%20we%20might%20be%20a%20good%20fit.%20Coffee%3F%20Zoom%3F%20Carrier%20pigeon%3F%0D%0A%0D%0ABest%2C%0D%0A%5BYour%20Name%5D`,
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
