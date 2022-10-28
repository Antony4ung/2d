import { Box, Container, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HistoryNumberSHow from "../components/HistoryDataShow";
import HistoryTable from "../components/HistoryTable";
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

  const FetchtwoDResult = () => {
    dispatch<any>(liveResultFetch());
  };

  const fetchHistory = () => {
    dispatch<any>(hsitoryFetch());
  }

  useEffect(() => {
    fetchHistory()
    FetchtwoDResult();
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
            <HistoryTable data={historyData} />
          </Container>
        </Box>
      ) : (
        <RenderLoader />
      )}
    </>
  );
};

export default History;
