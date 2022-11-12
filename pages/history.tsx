import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import HistoryNumberSHow from "../components/HistoryDataShow";
import HostoryDataTable from "../components/HistoryDataTable";
import RenderLoader from "../components/RenderLoader";
import { hsitoryFetch, liveResultFetch } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const History = () => {
  const theme = useTheme();

  const { data: historyData } = useAppSelector((state) => state.historyReducer);

  const { data: liveResult } = useAppSelector(
    (state) => state.liveResultReducer
  );

  const dispatch = useAppDispatch();

  const fetchLive = () => {
    dispatch<any>(liveResultFetch());
  };

  const fetchHistory = () => {
    dispatch<any>(hsitoryFetch());
  };

  // useEffect(() => {
  //   fetchHistory();
  //   fetchLive();
  // }, []);

  useEffect(() => {
    if (!liveResult || !historyData) {
      fetchLive();
      fetchHistory();
    }

    const setInt = setInterval(() => {
      fetchHistory();
      fetchLive();
    }, 7000);

    return () => clearInterval(setInt);

    
  }, []);

  return (
    <>
      {historyData && liveResult ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          
          <Container>
            <Typography
              align="center"
              variant="h6"
              sx={{ color: theme.palette.warning.dark }}
            >
              2D history
            </Typography>
            <HistoryNumberSHow />
            <HostoryDataTable data={historyData} />
          </Container>
        </Box>
      ) : (
        <RenderLoader />
      )}
    </>
  );
};

export default History;
