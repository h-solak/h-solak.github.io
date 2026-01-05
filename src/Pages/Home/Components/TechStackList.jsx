import { Grid, Typography } from "@mui/material";
import React from "react";

import JsIcon from "../../../assets/icons/techStack/js.svg";
import TsIcon from "../../../assets/icons/techStack/ts.svg";
import ReactIcon from "../../../assets/icons/techStack/react.svg";
import ReduxIcon from "../../../assets/icons/techStack/redux.svg";
import TailwindIcon from "../../../assets/icons/techStack/tailwind.svg";
import MaterialUiIcon from "../../../assets/icons/techStack/materialui.svg";
import NodejsIcon from "../../../assets/icons/techStack/nodejs.svg";
import MongodbIcon from "../../../assets/icons/techStack/mongodb.svg";
import ReactNativeIcon from "../../../assets/icons/techStack/reactnative.svg";
import SocketIcon from "../../../assets/icons/techStack/socket.svg";
import FirebaseIcon from "../../../assets/icons/techStack/firebase.svg";
import NextJsIcon from "../../../assets/icons/techStack/next.svg";

export const techStackArr = [
  {
    name: "Javascript",
    icon: JsIcon,
    width: 16,
  },
  {
    name: "Typescript",
    icon: TsIcon,
    width: 16,
  },
  {
    name: "React.js",
    icon: ReactIcon,
    width: 18,
  },
  {
    name: "Next.js",
    icon: NextJsIcon,
    width: 18,
  },
  {
    name: "Redux",
    icon: ReduxIcon,
    width: 16,
  },
  {
    name: "Zustand",
    icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    width: 16,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    width: 18,
  },
  {
    name: "Material UI",
    icon: MaterialUiIcon,
    width: 18,
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
    width: 18,
  },
  {
    name: "MongoDB",
    icon: MongodbIcon,
    width: 18,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
    width: 18,
  },
  {
    name: "React Native",
    icon: ReactNativeIcon,
    width: 18,
  },
  {
    name: "Web Socket",
    icon: SocketIcon,
    width: 18,
  },
];

const TechStackList = () => {
  return (
    <Grid marginTop={1} container gap={2}>
      {techStackArr.map((stack, index) => (
        <Grid
          key={index}
          item
          textAlign={"center"}
          display={"flex"}
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
          <img
            className={`${stack.name == "React.js" ? "rotate" : ""}`}
            src={stack.icon}
            width={stack.width ? stack.width : 16}
          />
          <Typography fontSize={14}>{stack.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TechStackList;
