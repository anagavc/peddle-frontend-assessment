import React from "react";

export const Paragraph = ({ text }) => {
  return (
    <p className="text-base  text-white text-justify font-headind z-40">
      {text}
    </p>
  );
};
export const Heading = ({ text }) => {
  return (
    <p className="text-3xl  text-white text-justify font-headind">{text}</p>
  );
};
