import React from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MyPic from "../../assets/images/me.jpeg";
import ReactIcon from "../../assets/icons/techStack/react.svg";
import CodingDurationCounter from "./Components/CountupTimer";
import TechStackList from "./Components/TechStackList";
import Projects from "./Components/Projects";
import {
  Mail,
  MailOutlineSharp,
  MailOutlineTwoTone,
} from "@mui/icons-material";
import { Experience } from "./Components/Experience";

const Home = () => {
  const isExtraXSScreen = useMediaQuery("(max-width:350px)");
  const isXsScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box className="fade-in-from-bottom">
      <Grid container marginTop={4} gap={1.2} alignItems={"center"}>
        <Grid item>
          <img
            src={MyPic}
            width={isXsScreen ? 96 : 108}
            height={isXsScreen ? 96 : 108}
            style={{
              borderRadius: 99,
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item>
          <Box display={"flex"} flexDirection={"column"} gap={0.5}>
            <Typography fontSize={20} fontWeight={600}>
              Hasan Solak
            </Typography>
            <Typography fontWeight={400} color={""}>
              Frontend Developer in Istanbul
            </Typography>
            <Tooltip title="Contact me via my email">
              <Link
                href="mailto:hasan23solak@gmail.com"
                fontSize={14}
                color={"secondary"}
                fontWeight={400}
                sx={{
                  textDecoration: "none",
                }}
              >
                <Box display={"flex"} alignItems={"center"} gap={0.4}>
                  <Mail
                    sx={{
                      fontSize: 18,
                    }}
                  />
                  <Typography fontWeight={500}>
                    hasan23solak@gmail.com
                  </Typography>
                </Box>
              </Link>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
      {/* About Me */}
      <Grid container marginTop={6}>
        <Typography fontSize={20}>👋 Hey, I am Hasan. I am...</Typography>{" "}
        <Box
          marginTop={1}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Typography>
            🧑🏻‍💻 a dedicated front-end developer who finds joy in the art of
            coding
          </Typography>
          <Typography>
            🎓 a graduate of Boğaziçi University with a major in{" "}
            <Tooltip title="Management Information Systems">
              <Typography variant="span">MIS</Typography>
            </Tooltip>{" "}
          </Typography>
          <Typography>
            💼{" "}
            <Link href="mailto:hasan23solak@gmail.com">
              probably available if you want to hire me
            </Link>
          </Typography>
          {/*<br /> <img className={``} src={ReactIcon} width={16} /> I focus on React.js.{" "} */}
        </Box>
      </Grid>
      {/* Counter */}

      <Grid container marginTop={4}>
        My journey in coding has been continuing non-stop for:
        <CodingDurationCounter />
      </Grid>

      {/* My experience */}
      <Grid container marginTop={10}>
        <Grid item xs={12}>
          <Typography fontSize={18} fontWeight={600}>
            ➡️ MY EXPERIENCE
          </Typography>
        </Grid>

        <Experience />
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
      <Grid container mt={5} pt={5} id="projects">
        <Grid item xs={12}>
          <Typography fontSize={18} fontWeight={600}>
            ➡️ MY PROJECTS
          </Typography>
          <Typography color={"secondary"} fontSize={14} fontWeight={500}>
            Click on the projects for more details.
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
