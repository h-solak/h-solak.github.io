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
        <a
          href="#home"
          style={{
            position: "relative",
          }}
        >
          <img
            className="navbar-icon"
            src={HomeIcon}
            width={24}
            height={24}
            //marginBottom -6 is a temporary fix
          />
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
      </Tooltip>
      <Tooltip title="Projects" placement="top">
        <a
          href="#projects"
          style={{
            position: "relative",
          }}
        >
          <img
            src={LaptopIcon}
            className="navbar-icon"
            width={28}
            height={28}
            style={{ marginBottom: 0 }}
            //marginBottom -6 is a temporary fix
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
      </Tooltip>
      {/*
        <div
        style={{
          height: "calc(100% - 15px)",
          width: "2px",
          backgroundColor: "#000",
          opacity: 0.2,
        }}
      ></div>
        */}
      <Tooltip title="Linkedin" placement="top">
        <a
          href="https://www.linkedin.com/in/hasansolak/"
          target="_blank"
          style={{
            position: "relative",
          }}
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
      </Tooltip>
      <Tooltip title="Github" placement="top">
        <a
          href="https://github.com/h-solak"
          target="_blank"
          style={{
            position: "relative",
          }}
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
            fontWeight={500}
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
      </Tooltip>
      <Tooltip title="Resume/CV" placement="top">
        <a
          href={Resume}
          target="_blank"
          style={{
            position: "relative",
          }}
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
            fontWeight={500}
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
      </Tooltip>
    </Box>
  );
};

export default Navbar;
