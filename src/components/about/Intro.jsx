import React from "react";

const Intro = () => {
  const introContent = {
    name: "Nandini Mehrotra",
    designation:
      "Computer Science Student @ UWaterloo | Specializing in Human Computer Interaction",
    text: (
      <>
        <p>
          Allow me to introduce myself—I'm Nandini, a spirited CS student
          currently embarking on an incredible adventure at the prestigious
          University of Waterloo. As I navigate through my third year, I find
          myself captivated by the captivating world of Frontend Development,
          Fullstack Development, and the ever-evolving realm of Software
          Development. With an insatiable curiosity and a passion for crafting
          immersive digital experiences, I am continuously inspired to push the
          boundaries of what's possible. Armed with my keyboard as my brush and
          a blank canvas of code, I embark on an exhilarating journey, weaving
          together artistry and technology to bring ideas to life.
        </p>
        <p>
          In addition, I have discovered a deep appreciation for the captivating
          world of UX design. This love bloomed from my inherent fascination
          with music. I enjoy sharing music that inspires me, and discussing it
          with my friends. I do all of this to uncover new insights about a song
          that I would’ve never understood on the first play-through. I
          experience tiny moments of joy every time I'm able to put something
          together that a person loves through just a little research (be it an
          app, website or a Spotify playlist!)
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
