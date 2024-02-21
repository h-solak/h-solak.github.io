import React, { useState } from "react";
import { ProjectList } from "./ProjectsList";
import { Box, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const [showUrlIcon, setShowUrlIcon] = useState("");

  return (
    <Grid marginTop={1} container gap={2} justifyContent={"space-between"}>
      {ProjectList.map((project, index) => (
        <Tooltip
          title={project.description}
          sx={{
            "& .MuiTooltip-tooltip": {
              backgroundColor: "#fff",
              color: "white",
              fontSize: "12px",
              border: "1px solid #f50057",
            },
          }}
        >
          <Grid
            key={index}
            item
            gap={1}
            sx={{
              paddingY: 1,
              borderRadius: 4,
              cursor: "pointer",
            }}
            onClick={() => window.open(project.url, "_blank")}
            onMouseEnter={() => setShowUrlIcon(project.title)}
            onMouseLeave={() => setShowUrlIcon("")}
          >
            <img
              src={project.image}
              width={isXsScreen ? 200 : 340}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography>{project.title}</Typography>
              {showUrlIcon === project.title && <OpenInNewIcon fontSize="24" />}
            </Box>
          </Grid>
        </Tooltip>
      ))}
    </Grid>
  );
};

export default Projects;
