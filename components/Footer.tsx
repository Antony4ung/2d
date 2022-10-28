import React from "react";
import { Box,Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        // mt:5,
        height:92
      }}
    >
      <Typography variant="subtitle2" gutterBottom>
        Developer Aung Myat Thu
      </Typography>
    </Box>
  );
};

export default Footer;
