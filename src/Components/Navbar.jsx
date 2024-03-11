import React from "react";
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
  return (
    <Box
      className="navbar"
      sx={{
        zIndex: 99,
      }}
    >
      <Tooltip title="Home" placement="top">
        <a href="#home">
          <img
            className="navbar-icon"
            src={HomeIcon}
            width={24}
            height={24}
            style={{ marginBottom: -6 }}
            //marginBottom -6 is a temporary fix
          />
        </a>
      </Tooltip>
      <Tooltip title="Projects" placement="top">
        <a href="#projects">
          <img
            src={LaptopIcon}
            className="navbar-icon"
            width={28}
            height={28}
            style={{ marginBottom: -6 }}
            //marginBottom -6 is a temporary fix
          />
        </a>
      </Tooltip>
      <div
        style={{
          height: "calc(100% - 15px)",
          width: "2px",
          backgroundColor: "#000",
          opacity: 0.2,
        }}
      ></div>
      <Tooltip title="Linkedin" placement="top">
        <img
          className="navbar-icon"
          src={LinkedinIcon}
          width={30}
          onClick={() =>
            window.open("https://www.linkedin.com/in/hasansolak/", "_blank")
          }
        />
      </Tooltip>
      <Tooltip title="Github" placement="top">
        <img
          className="navbar-icon"
          src={GithubIcon}
          width={24}
          onClick={() => window.open("https://github.com/h-solak", "_blank")}
        />
      </Tooltip>
      <Tooltip title="Resume/CV" placement="top">
        <img
          src={ResumeIcon}
          className="navbar-icon"
          width={28}
          onClick={() => window.open(Resume, "_blank")}
        />
      </Tooltip>
    </Box>
  );
};

export default Navbar;
