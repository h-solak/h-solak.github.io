import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const CodingDurationCounter = () => {
  const [codingDuration, setCodingDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2021-10-18T12:59-0500");

    const updateDuration = () => {
      const currentDate = new Date();
      let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
      let monthsDiff = currentDate.getMonth() - startDate.getMonth();
      let daysDiff = currentDate.getDate() - startDate.getDate();
      let hoursDiff = currentDate.getHours() - startDate.getHours();
      let minutesDiff = currentDate.getMinutes() - startDate.getMinutes();
      let secondsDiff = currentDate.getSeconds() - startDate.getSeconds();

      if (secondsDiff < 0) {
        minutesDiff--;
        secondsDiff += 60;
      }
      if (minutesDiff < 0) {
        hoursDiff--;
        minutesDiff += 60;
      }
      if (hoursDiff < 0) {
        daysDiff--;
        hoursDiff += 24;
      }
      if (daysDiff < 0) {
        monthsDiff--;
        daysDiff += new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
      }
      if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
      }

      setCodingDuration({
        years: yearsDiff,
        months: monthsDiff,
        days: daysDiff,
        hours: hoursDiff,
        minutes: minutesDiff,
        seconds: secondsDiff,
      });
    };

    // Update duration every second
    const intervalId = setInterval(updateDuration, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid marginTop={1} container gap={2}>
      <Grid
        item
        textAlign={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#00000010",
          paddingY: 1,
          borderRadius: 4,
          width: 64,
          border: "2px solid #00000010",
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {codingDuration.years}
        </Typography>
        <Typography fontSize={10} fontWeight={400}>
          Years
        </Typography>
      </Grid>
      <Grid
        item
        textAlign={"center"}
        sx={{
          backgroundColor: "#00000010",
          paddingY: 1,
          borderRadius: 4,
          width: 64,
          border: "2px solid #00000010",
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {codingDuration.months}
        </Typography>
        <Typography fontSize={10} fontWeight={400}>
          Months
        </Typography>
      </Grid>
      <Grid
        item
        textAlign={"center"}
        sx={{
          backgroundColor: "#00000010",
          paddingY: 1,
          borderRadius: 4,
          width: 64,
          border: "2px solid #00000010",
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {codingDuration.days}
        </Typography>
        <Typography fontSize={10} fontWeight={400}>
          Days
        </Typography>
      </Grid>
      <Grid
        item
        textAlign={"center"}
        sx={{
          backgroundColor: "#00000010",
          paddingY: 1,
          borderRadius: 4,
          width: 64,
          border: "2px solid #00000010",
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {codingDuration.hours}
        </Typography>
        <Typography fontSize={10} fontWeight={400}>
          Hours
        </Typography>
      </Grid>
      <Grid
        item
        textAlign={"center"}
        sx={{
          backgroundColor: "#00000010",
          paddingY: 1,
          borderRadius: 4,
          width: 64,
          border: "2px solid #00000010",
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {codingDuration.minutes}
        </Typography>
        <Typography fontSize={10} fontWeight={400}>
          Minutes
        </Typography>
      </Grid>
      <Grid
        item
        textAlign={"center"}
        sx={{
          backgroundColor: "#00000010",
          paddingY: 1,
          borderRadius: 4,
          width: 64,
          border: "2px solid #00000010",
        }}
      >
        <Typography fontSize={14} fontWeight={600}>
          {codingDuration.seconds}
        </Typography>
        <Typography fontSize={10} fontWeight={400}>
          Seconds
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CodingDurationCounter;
