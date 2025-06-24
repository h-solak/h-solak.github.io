import {
  Box,
  Grid,
  Link,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const Experience = () => {
  return (
    <Grid py={2} container spacing={8}>
      {experienceList.map((experience, index) => (
        <ExperienceItem key={experience.id} {...experience} />
      ))}
    </Grid>
  );
};

export const ExperienceItem = ({
  id = "kobil",
  company,
  position,
  companyUrl,
  date,
  dateTooltip,
  description,
  stack,
  color,
  index = 0,
}) => {
  const xs = useMediaQuery("(max-width:600px)");
  return (
    <Grid item xs={12}>
      <Box
        display="flex"
        alignItems={xs ? "start" : "center"}
        flexDirection={xs ? "column" : "row"}
      >
        <Typography fontSize={14} fontWeight="bold">
          {`${position}, `}{" "}
          <Link
            href={companyUrl}
            target={"_blank"}
            sx={{
              color: `${color}`,
              textDecoration: "none",
            }}
          >
            {company}
          </Link>
        </Typography>
        {!xs && (
          <Box
            sx={{
              height: 2,
              flex: 1,
              backgroundColor: "secondary.light",
              borderRadius: 10,
              mx: 1,
            }}
          />
        )}
        <Tooltip title={dateTooltip} placement="top">
          <Typography fontSize={14} color="secondary">
            {date}
          </Typography>
        </Tooltip>
      </Box>
      <Stack>
        {description.map((item, i) => (
          <Typography
            component="li"
            key={`${id}-desc-${i}`}
            fontSize={14}
            mt={1}
          >
            {item}
          </Typography>
        ))}
      </Stack>
      <Typography fontSize={14} mt={1}>
        {"\u{1F4CC} "}
        <strong>Stack:</strong> {stack}
      </Typography>
    </Grid>
  );
};

const experienceList = [
  {
    id: "kobil",
    company: "KOBIL",
    companyUrl: "https://www.linkedin.com/company/kobil-group",
    position: "Frontend Developer",
    date: "April 2024 - Present",
    dateTooltip: "1+ years",
    description: [
      "Collaborated with international teams to design and enhance product features, adapting to dynamic client requirements.",
      "Developed new features, wrote tests, resolved bugs, and improved legacy code through refactoring.",
      "Applied Agile and Scrum methodologies.",
      "Acquired significant experience working in a demanding, fast-paced environment.",
    ],
    stack: "React.js, Typescript, Redux, React-Query, Material UI, Jest, Jira",
    color: "#0000ff",
  },
  {
    id: "dugun",
    company: "Düğün.com",
    companyUrl: "https://www.linkedin.com/company/dugun-com",
    position: "Frontend Developer Intern",
    date: "May 2023 - March 2023",
    dateTooltip: "10 months",
    description: [
      "Contributed to the development of the main project and a side project.",
      "Resolved bugs, improved code.",
      "I had the opportunity to work closely with my mentor, gaining valuable insights from his expertise",
    ],
    stack:
      " React.js, Vue.js, Typescript, Redux, React-Query, Material UI, Jest, Jira",
    color: "#DB0962",
  },
  {
    id: "vatansoft",
    company: "VatanSoft",
    companyUrl: "https://www.linkedin.com/company/vatansoft/",
    position: "Frontend Developer Intern",
    date: "July 2022 - October 2022",
    dateTooltip: "4 months",
    description: [
      "Worked on an accounting management project.",
      "Developed new features, resolved bugs.",
      "I gained valuable experience collaborating with backend and frontend teams, as well as effectively communicating with key stakeholders, including company managers.",
    ],
    stack: "React.js, Redux, Redux Saga",
    color: "#ECAD0B",
  },
];
