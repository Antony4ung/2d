import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { useTheme } from "@mui/material/styles";
import { useAppSelector } from "../redux/hooks";

export default function HistoryNumberSHow() {
  const theme = useTheme();

  const { data, loading } = useAppSelector((state) => state.liveResultReducer);

  return (
    <Box sx={{ mt: 4 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 5,
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" gutterBottom>
          {data.live.twod}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            //   alignItems: "center",
          }}
        >
          <DoneIcon fontSize="medium" />
          <Typography variant="body2" gutterBottom>
            Updated: {data?.live.time}
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
}
