import { borderRadius } from "@mui/system";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div
      id="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cfe8fc",
        height: "450px",
      }}>
      <div id="container-photo">
        <img
          src="https://i.pinimg.com/736x/30/13/bd/3013bd89b936f554c6f8fc1b2e85c2bc.jpg"
          style={{
            width: "300px",
            borderRadius: "300px",
            margin: "30px 100px",
          }}
          alt=""
        />
      </div>
      <div id="container-profile">
        <h1>ABBA ASAN</h1>
        <h4>Frontend Developer</h4>
        <p>
          I am a frontend developer with robust problem-solving skills.
          Extremely motivated to constantly develop my skills and grow
          professionally.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
