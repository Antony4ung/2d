import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import RenderLoader from "../components/RenderLoader";
import ResultContainer from "../components/ResultContainer";
import { liveResultFetch, twoDResultFetch } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ResultResponse } from "../types";

const Results = () => {

    
  const { data, loading } = useAppSelector((state) => state.TWODResultReducer);

  const dispatch = useAppDispatch();

  const fetchResult = () => {
    dispatch<any>(liveResultFetch());
  };

  const FetchtwoDResult = () => {
    dispatch<any>(twoDResultFetch());
  };

  useEffect(() => {
    fetchResult()
    FetchtwoDResult();
  }, []);

  return (
    <Container sx={{mt:5,pb:3}}>
      {data ? (
        <Grid container spacing={2}>
          {data.map((item: ResultResponse, index: number) => (
            <ResultContainer result={item} key={index} />
          ))}
        </Grid>
      ) : (
        <RenderLoader />
      )}
    </Container>
  );
};

export default Results;
