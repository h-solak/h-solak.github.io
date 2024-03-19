import React, { useState } from "react";
import { ProjectList } from "./ProjectsList";
import {
  Box,
  Button,
  Grid,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BaseModal from "../../../Components/Modal";
import { techStackArr } from "./TechStackList";
import { GitHub } from "@mui/icons-material";

const Projects = () => {
  const isExtraXsScreen = useMediaQuery("(max-width:400px)"); //for link bug (on top of image)
  const isSmScreen = useMediaQuery("(max-width:900px)");
  const [showUrlIcon, setShowUrlIcon] = useState("");
  const [projectModal, setProjectModal] = useState(-1);

  return (
    <Grid py={2} container spacing={4}>
      {ProjectList.map((project, index) => (
        <React.Fragment key={index}>
          <Grid
            gap={1}
            item
            xs={12}
            md={6}
            sx={{
              borderRadius: 4,
              cursor: "pointer",
            }}
            // onClick={() => window.open(project.url, "_blank")}
            onMouseEnter={() => setShowUrlIcon(project.title)}
            onMouseLeave={() => setShowUrlIcon("")}
            onClick={() => setProjectModal(project.id)}
          >
            <Link
              // href={project.url}
              target="_blank"
              sx={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <img
                src={project.image}
                width={"100%"}
                height={isSmScreen ? 200 : 150}
                style={{
                  objectFit: "fill",
                  borderRadius: 16,
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
                {/*
                 {showUrlIcon === project.title && (
                  <OpenInNewIcon fontSize="24" />
                )}
                */}
              </Box>
            </Link>
          </Grid>
          <BaseModal
            isModalOpen={projectModal == project.id}
            setIsModalOpen={setProjectModal}
            title={project.title}
            contentPadding={0}
          >
            <Grid item>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={project.image}
                  width={"100%"}
                  height={isSmScreen ? "auto" : 250}
                  style={{
                    objectFit: "cover",
                    border: "3px solid #00000020",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "calc(100% - 10px)",
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
                  }}
                ></div>
                <Link
                  href={project.url}
                  target={"_blank"}
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: isExtraXsScreen ? "0%" : "4%",
                  }}
                >
                  <Button variant="contained" sx={{}} startIcon={<GitHub />}>
                    Link
                  </Button>
                </Link>
              </Box>
              <Typography mt={1} px={3}>
                {project.description}
              </Typography>

              <Grid
                container
                mt={0}
                mb={3}
                px={2}
                spacing={2}
                sx={{
                  width: "100%",
                }}
              >
                {project.tags.map((tag) => {
                  const stack = techStackArr.find((item) => item.name == tag);
                  return (
                    <Grid key={tag} item>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                        sx={{
                          backgroundColor: "#00000010",
                          paddingY: 1,
                          paddingX: 2,
                          borderRadius: 4,
                          border: "2px solid #00000010",
                        }}
                      >
                        {stack?.icon && (
                          <img src={stack?.icon} width={stack?.width} />
                        )}
                        <Typography fontSize={14}>{tag}</Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </BaseModal>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Projects;
