import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import Resume from "../assets/documents/resume.pdf";
/* Icons */
import HomeIcon from "../assets/icons/home.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";
import ResumeIcon from "../assets/icons/resume.svg";
import LaptopIcon from "../assets/icons/laptop.svg";
const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");
  return (
    <Box
      className="navbar"
      sx={{
        zIndex: 99,
      }}
    >
      <a
        href="#home"
        style={{
          position: "relative",
        }}
        onMouseEnter={() => setHoveredIcon("home")}
        onMouseLeave={() => setHoveredIcon("")}
      >
        <img className="navbar-icon" src={HomeIcon} width={24} height={24} />
        <Typography
          fontSize={10}
          fontWeight={500}
          sx={{
            position: "absolute",
            bottom: -7,
            left: -1,
          }}
        >
          Home
        </Typography>
      </a>
      <a
        href="#projects"
        style={{
          position: "relative",
        }}
        onMouseEnter={() => setHoveredIcon("projects")}
        onMouseLeave={() => setHoveredIcon("")}
      >
        <img
          src={LaptopIcon}
          className="navbar-icon"
          width={28}
          height={28}
          style={{ marginBottom: 0 }}
        />
        <Typography
          fontSize={10}
          fontWeight={500}
          sx={{
            position: "absolute",
            bottom: -5,
            left: -4,
            textAlign: "start",
          }}
        >
          Projects
        </Typography>
      </a>
      {/* 
      <div
        style={{
          height: "calc(100% - 15px)",
          width: "2px",
          backgroundColor: "#000",
          opacity: 0.2,
        }}
      ></div> */}

      <a
        href="https://www.linkedin.com/in/hasansolak/"
        target="_blank"
        style={{
          position: "relative",
        }}
        onMouseEnter={() => setHoveredIcon("linkedin")}
        onMouseLeave={() => setHoveredIcon("")}
      >
        <img
          className="navbar-icon"
          src={LinkedinIcon}
          width={30}
          height={30}
          style={{ marginBottom: -1 }}
        />
        <Typography
          fontSize={10}
          fontWeight={500}
          sx={{
            position: "absolute",
            bottom: -5,
            left: -4,
            textAlign: "start",
          }}
        >
          Linkedin
        </Typography>
      </a>

      <a
        href="https://github.com/h-solak"
        target="_blank"
        style={{
          position: "relative",
        }}
        onMouseEnter={() => setHoveredIcon("github")}
        onMouseLeave={() => setHoveredIcon("")}
      >
        <img
          className="navbar-icon"
          src={GithubIcon}
          width={24}
          height={24}
          style={{ marginBottom: -1 }}
        />
        <Typography
          fontSize={10}
          sx={{
            position: "absolute",
            bottom: -8,
            left: -4,
            textAlign: "start",
          }}
        >
          Github
        </Typography>
      </a>
      <a
        href={Resume}
        target="_blank"
        style={{
          position: "relative",
        }}
        onMouseEnter={() => setHoveredIcon("cv")}
        onMouseLeave={() => setHoveredIcon("")}
      >
        <img
          className="navbar-icon"
          src={ResumeIcon}
          width={28}
          height={28}
          style={{ marginBottom: 1 }}
        />
        <Typography
          fontSize={10}
          sx={{
            position: "absolute",
            bottom: -5,
            left: 6,
            textAlign: "start",
          }}
        >
          CV
        </Typography>
      </a>
    </Box>
  );
};

export default Navbar;
