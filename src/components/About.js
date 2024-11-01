import React from "react";
import { image } from "../data/data";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a brief paragraph about me. I love coding and creating new things!</p>
      <img src={image} alt="I made this" />
    </div>
  );
};


export default About;
