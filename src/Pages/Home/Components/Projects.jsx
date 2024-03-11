import React, { useState } from "react";
import { ProjectList } from "./ProjectsList";
import { Box, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  const isSmScreen = useMediaQuery("(max-width:900px)");
  const [showUrlIcon, setShowUrlIcon] = useState("");

  return (
    <Grid py={2} container spacing={4}>
      {ProjectList.map((project, index) => (
        <Tooltip
          key={index}
          title={project.description}
          sx={{
            "& .MuiTooltip-tooltip": {
              backgroundColor: "#fff",
              color: "white",
              fontSize: "12px",
              border: "1px solid #f50057",
            },
          }}
          placement="top"
        >
          <Grid
            gap={1}
            item
            xs={12}
            md={6}
            sx={{
              borderRadius: 4,
              cursor: "pointer",
            }}
            onClick={() => window.open(project.url, "_blank")}
            onMouseEnter={() => setShowUrlIcon(project.title)}
            onMouseLeave={() => setShowUrlIcon("")}
          >
            <img
              src={project.image}
              width={"100%"}
              height={isSmScreen ? 200 : 150}
              style={{
                objectFit: "fill",
                borderRadius: 8,
                border: "3px solid #00000020",
              }}
            />
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography
                sx={{
                  transition: "0.1 ease",
                  textDecoration:
                    showUrlIcon == project.title ? "underline" : "none",
                }}
              >
                {project.title}
              </Typography>
              {showUrlIcon === project.title && <OpenInNewIcon fontSize="24" />}
            </Box>
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default Projects;
