import React, { useEffect } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ResultChild from "./ResultChild";

const ResultContainer = ({ result }: any) => {

  // useEffect(()=>{console.log(result)},[])

  return (
    <Grid item xs={12} md={6} sx={{}}>
      <>
        <CardContent>
          <Typography
            align="right"
            sx={{ fontWeight: "bold", my: 2, mr: 2 }}
            color="text.primary"
            gutterBottom
            variant={"body1"}
          >
            {result.date}
          </Typography>

          {result?.child?.map((item: any, index: number) => (
            <ResultChild item={item} key={index} />
          ))}
        </CardContent>
      </>
    </Grid>
  );
};

export default ResultContainer;
