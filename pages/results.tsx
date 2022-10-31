import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RenderLoader from "../components/RenderLoader";
import ResultContainer from "../components/ResultContainer";
import { liveResultFetch, twoDResultFetch } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ResultResponse } from "../types";

const Results = () => {
  const [date, setDate] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const { data, loading } = useAppSelector((state) => state.TWODResultReducer);

  const dispatch = useAppDispatch();

  const fetchResult = () => {
    dispatch<any>(liveResultFetch());
  };

  const FetchtwoDResult = () => {
    dispatch<any>(twoDResultFetch());
  };

  useEffect(() => {
    fetchResult();
    FetchtwoDResult();
  }, []);


  useEffect(()=>{
    if(date === 'all'){
      setFilteredData(data)
    }else{
      setFilteredData(data.filter((item:any)=>item?.date === date))
    }
  },[date,data])

  return (
    <Container sx={{ mt: 5, pb: 3 }}>
      {filteredData && data ? (
        <>
          <Box sx={{display:"flex",justifyContent:"end",mb:2}}>
          <FormControl sx={{minWidth:200}}>
            <InputLabel id="demo-simple-select-label">Select Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={date}
              label="Select Date"
              onChange={(e) => setDate(e.target.value)}
            >
              <MenuItem key={'all'} value={'all'}>{'all'}</MenuItem>
              
              {
                data.map((item:any,index:number)=><MenuItem key={index} value={item.date}>{item.date}</MenuItem>)
              }
            </Select>
          </FormControl>
          </Box>
          <Grid container spacing={2}>
            {filteredData.map((item: ResultResponse, index: number) => (
              <ResultContainer result={item} key={index} />
            ))}
          </Grid>
        </>
      ) : (
        <RenderLoader />
      )}
    </Container>
  );
};

export default Results;
