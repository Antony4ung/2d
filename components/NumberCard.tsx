import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { AMPMCard } from "../types";
import { useRouter } from "next/router";
const NumberCard = ({ time, set, value, twod }: AMPMCard) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      style={{ maxWidth: "100%", cursor: "pointer" }}
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      onClick={() => router.push("/history")}
    >
      <Card sx={{ minWidth: 380, mt: 2, borderRadius: 2, boxShadow: 2 }}>
        <CardContent>
          <Typography
            align="center"
            sx={{ fontWeight: "bold" }}
            color="text.primary"
            gutterBottom
          >
            {time}
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
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
              <Typography variant="subtitle1">
                {value}
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
                {set}
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
              sx={{ color: theme.palette.warning.dark }}
              variant="h5"
              gutterBottom
            >
              {}
            </Typography> */}

              <Button variant="contained">
                <Typography sx={{}} variant="h6">
                  {twod}
                </Typography>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NumberCard;
