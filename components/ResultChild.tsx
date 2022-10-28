import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

const ResultChild = ({ item }: any) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        align="center"
        sx={{ fontWeight: "bold",mb:1,mt:3 }}
        color="text.primary"
        gutterBottom
      >
        {item.time}
      </Typography>
      <Divider sx={{ }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{}}
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            value
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {item.value}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{}}
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            set
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {item.set}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{}}
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            2D
          </Typography>

          {/* <Typography
            style={{ color: theme.palette.warning.dark }}
            variant="h6"
            gutterBottom
          >
            {item.twod}
          </Typography> */}
          <Button variant="contained">{item.twod}</Button>
        </Box>
      </Box>
    </>
  );
};

export default ResultChild;
