import React from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MyPic from "../../assets/images/me.jpg";
import CodingDurationCounter from "./Components/CountupTimer";
import TechStackList from "./Components/TechStackList";
import Projects from "./Components/Projects";

const Home = () => {
  const isExtraXSScreen = useMediaQuery("(max-width:350px)");
  const isXsScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Grid
        container
        marginTop={6}
        gap={isExtraXSScreen ? 1 : 2}
        alignItems={"center"}
      >
        <Grid item>
          <img
            src={MyPic}
            width={isXsScreen ? 96 : 136}
            height={isXsScreen ? 96 : 136}
            style={{ borderRadius: 99, objectFit: "cover" }}
          />
        </Grid>
        <Grid item>
          <Typography fontSize={20} fontWeight={600}>
            Hasan Solak
          </Typography>
          <Typography fontWeight={300}>Frontend Developer</Typography>
          <Link
            href="mailto:hasan23solak@gmail.com"
            color={"secondary.light"}
            fontSize={14}
          >
            hasan23solak@gmail.com
          </Link>
        </Grid>
      </Grid>
      {/* About Me */}
      <Grid container marginTop={6}>
        <Typography fontSize={18} fontWeight={600}>
          ➡️ ABOUT ME
        </Typography>
        <Typography marginTop={1}>
          <li>
            I'm a 4rd year MIS student at Boğaziçi University who will be
            graduated this summer. I love building websites & mobile apps.
          </li>
        </Typography>
      </Grid>
      {/* Counter */}

      <Grid container marginTop={4}>
        <li>And... I've been coding for almost:</li>
        <CodingDurationCounter />
      </Grid>

      {/* About Me */}
      <Grid container marginTop={10}>
        <Grid item xs={12}>
          <Typography fontSize={18} fontWeight={600}>
            ➡️ MY TECH STACK
          </Typography>
        </Grid>

        <TechStackList />
      </Grid>

      {/* Projects */}
      <Grid container marginTop={10} id="projects">
        <Grid item xs={12}>
          <Typography fontSize={18} fontWeight={600}>
            ➡️ MY PROJECTS
          </Typography>
        </Grid>

        <Projects />
      </Grid>

      <Typography textAlign={"center"} marginTop={10} color={"secondary"}>
        You can always contact me via my email:{" "}
        <Link href="mailto:hasan23solak@gmail.com">hasan23solak@gmail.com</Link>
      </Typography>
      <Box sx={{ height: "20vh" }}></Box>
    </Box>
  );
};

export default Home;
