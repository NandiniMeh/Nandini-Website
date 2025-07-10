import React from "react";

const Intro = (props) => {
  const introContent = {
    name: "Nandini Mehrotra",
    designation:
      "Computer Science Student @ UWaterloo | Specializing in Human Computer Interaction",
    text: (
      <>
        <p>
          Hey, I’m Nandini — a Computer Science student at the University of
          Waterloo with fullstack experience and a soft spot for frontend. I
          love writing code that speaks to people — whether that’s through a
          responsive UI, a thoughtful interaction, or a tiny animation that
          makes someone smile.
        </p>
        <p>
          While I’ve worked across the stack, from building APIs to optimizing
          backend workflows, it’s the frontend that truly excites me. It’s
          where logic meets emotion. Recently, I’ve been diving into{" "}
          <a href="https://threejs.org" target="_blank">
            Three.js
          </a>{" "}
          to explore creative 3D web experiences that push the browser in
          unexpected ways.
        </p>
        <p>
          Outside of code, I’m always creating. Right now, that means writing a
          book (sketching out the first chapters of a book I might actually
          finish one day). It's a project that’s teaching me as much about persistence
          and clarity as any line of JavaScript. I also collect vinyl records
          (yes, I still believe in album art), and I love building playlists and
          interfaces that feel personal and just a little bit poetic.
        </p>
        <p>
          I see software as a form of storytelling. And I’m always chasing that intersection
          between creativity, code, and craft.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
