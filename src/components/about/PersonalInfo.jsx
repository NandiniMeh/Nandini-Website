import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "24 March 2002",
        },
        {
          id: 2,
          name: "Age",
          content: "23",
        },
        {
          id: 3,
          name: "Address",
          content: "Waterloo, Ontario",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:n3mehrot@uwaterloo.ca">n3mehrot@uwaterloo.ca</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+1 226 507 4163">+1 226 507 4163</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "India",
        },
        {
          id: 2,
          name: "Study",
          content: "Pursuing Bachelor of Computer Science",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="nandini_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
