import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { useTheme } from "@mui/material/styles";
import { useAppSelector } from "../redux/hooks";
import { motion } from "framer-motion";

export default function NumberShowBoard() {
  const theme = useTheme();

  const { data, loading } = useAppSelector((state) => state.liveResultReducer);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Card
        sx={{
          minWidth: 380,
          borderRadius: "20px",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.warning.light,
          boxShadow: 5,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 5,
            flexDirection: "column",
          }}
        >
          <motion.div
            // initial={{ y: 50, opacity: 0 }}
            // transition={{ ease: "easeInOut", duration: 1 }}
            // animate={{ y: 0, opacity: 1 }}
            // exit={{ y: -50, opacity: 0 }}
            key={data?.live.twod}
            initial="hidden"
            animate="visible"
            exit={'exit'}
            variants={{
              hidden: {
                y: 30,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
              exit:{ y: -30, opacity: 0 }
            }}
            transition={{ delay: 1, type: 'spring' }}
          >
            <Typography sx={{fontWeight:'bold'}} variant="h1">
              {data.live.twod}
            </Typography>
          </motion.div>
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
      </Card>
    </Box>
  );
}
