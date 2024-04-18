import React, { useState, useEffect } from "react";

const CustomCursor = React.memo(() => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const colors = ["#ffd700", "#2acaea", "#f44336"];

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
      setTrail((trail) => [
        ...trail,
        {
          x: event.clientX,
          y: event.clientY,
          time: Date.now(),
          color: colors[trail.length % colors.length],
        },
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((trail) => trail.filter((t) => now - t.time < 1500));
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="custom-cursor shadow-cursor"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            backgroundColor: pos.color,
            opacity: 0.5 * (1 - (Date.now() - pos.time) / 1500),
            transform: `translate(-50%, -50%) scale(${
              1 + ((Date.now() - pos.time) / 1500) * 0.5
            })`,
          }}
        />
      ))}
    </>
  );
});

export default CustomCursor;
