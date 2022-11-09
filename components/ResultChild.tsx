import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

const ResultChild = ({ item }: any) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        align="center"
        sx={{ fontWeight: "bold", mb: 1, mt: 3 }}
        color="text.primary"
        gutterBottom
      >
        {item.time}
      </Typography>
      <Divider sx={{}} />

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

          {
            <Typography
              style={{
                color:
                  item.time === "12:00:00" || item.time === "16:30:00"
                    ? theme.palette.warning.dark
                    : theme.palette.text.primary
              }}
              variant="h6"
              gutterBottom
            >
              {item.twod}
            </Typography>
          }
        </Box>
      </Box>
    </>
  );
};

export default ResultChild;
