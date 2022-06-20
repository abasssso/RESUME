import { Box, Slider } from "@mui/material";
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "13px" }}>TOP SKILLS</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="container">
          <div className="container-card">
            <img
              className="person-skill"
              src="https://img.seadn.io/files/bf6b7a36d2ed23551a601ca9fa50bccd.png?fit=max&w=600"
              alt=""
            />
            <h2>C++</h2>
            <Box sx={{ width: 200 }}>
              <Slider disabled defaultValue={85} aria-label="Disabled slider" />
            </Box>
          </div>

          <div className="container-card">
            <img
              className="person-skill"
              src="https://img.seadn.io/files/e6b8a26541ed73f39a6e4be31e3dd389.png?fit=max&auto=format&h=720&w=720"
              alt=""
            />
            <h2>Javascript</h2>
            <Box sx={{ width: 200 }}>
              <Slider
                disabled
                defaultValue={100}
                aria-label="Disabled slider"
              />
            </Box>
          </div>

          <div className="container-card">
            <img
              className="person-skill"
              src="https://img.seadn.io/files/2b43f50f18c11e45330dd1237d2bb493.png?fit=max&w=600"
              alt=""
            />
            <h2>Java</h2>
            <Box sx={{ width: 200 }}>
              <Slider disabled defaultValue={70} aria-label="Disabled slider" />
            </Box>
          </div>

          <div className="container-card">
            <img
              className="person-skill"
              src="https://img.seadn.io/files/35a149b4aad74d151d51948762e6910e.png?fit=max&w=600"
              alt=""
            />
            <h2>Python</h2>
            <Box sx={{ width: 200 }}>
              <Slider disabled defaultValue={40} aria-label="Disabled slider" />
            </Box>
          </div>
          <div className="container-card">
            <img
              className="person-skill"
              src="https://img.seadn.io/files/f5e46e461e5b1769b29cc30d8bc2191d.png?fit=max&w=600"
              alt=""
            />
            <h2>HTML & CSS</h2>
            <Box sx={{ width: 200 }}>
              <Slider disabled defaultValue={90} aria-label="Disabled slider" />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
