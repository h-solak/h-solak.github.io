import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
const BaseModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  contentPadding = 5,
  children,
  sx,
  ...props
}) => {
  const isSmScreen = useMediaQuery("(max-width:900px)");
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(-1)}
      onClick={() => setIsModalOpen(-1)}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        className="absolute-center"
        borderRadius={8}
        onClick={(e) => e.stopPropagation()}
        sx={{
          backgroundColor: "#fff",
          width: isSmScreen ? "100%" : "auto",
          outline: "none",
          ...sx,
        }}
        {...props}
      >
        <Grid
          container
          sx={{
            borderBottom: 2,
            borderColor: "secondary.light",
          }}
          paddingX={3}
          paddingY={1}
        >
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h6" fontWeight={500}>
              {title}
            </Typography>
            <IconButton onClick={() => setIsModalOpen(-1)}>
              <Close
                sx={{
                  color: "secondary.main",
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container padding={contentPadding}>
          {children}
        </Grid>
      </Box>
    </Modal>
  );
};

export default BaseModal;
