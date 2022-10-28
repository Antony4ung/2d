import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import NumberCard from "./NumberCard";
import moment from "moment";
import { useAppSelector } from "../redux/hooks";
const MainContainer = () => {
  const { data, loading } = useAppSelector((state) => state.liveResultReducer);

  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 5 }}>
      <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12}>
        {data?.server_time && (
          <Typography variant="body2" gutterBottom>
            ယခုအချိန် - {moment(data?.server_time).format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>
        )}
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          my: { xs: 5, md: 0 },
        }}
        item
        xs={12}
        md={6}
      >
        <Typography sx={{fontStyle:'italic'}} variant="body2" gutterBottom>
          နံနက်ခင်း ဂဏန်းများ
        </Typography>
        <NumberCard
          set={data?.result[0].set}
          value={data?.result[0].value}
          twod={data?.result[0].twod}
          time={data?.result[0].open_time}
        />
        <NumberCard
          set={data?.result[1].set}
          value={data?.result[1].value}
          twod={data?.result[1].twod}
          time={data?.result[1].open_time}
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mb: { xs: 5, md: 0 },
        }}
        item
        xs={12}
        md={6}
      >
        <Typography sx={{fontStyle:'italic'}} variant="body2" gutterBottom>
          ညနေခင်း ဂဏန်းများ
        </Typography>
        <NumberCard
          set={data?.result[2].set}
          value={data?.result[2].value}
          twod={data?.result[2].twod}
          time={data?.result[2].open_time}
        />
        <NumberCard
          set={data?.result[3].set}
          value={data?.result[3].value}
          twod={data?.result[3].twod}
          time={data?.result[3].open_time}
        />
      </Grid>
    </Grid>
  );
};

export default MainContainer;
