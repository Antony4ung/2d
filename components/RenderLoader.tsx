import { Box } from '@mui/material'
import React from 'react'
import Lottie from "lottie-react";
import loaderData from "../public/lotties/loader.json";

const RenderLoader = () => {
  return (
    <Box sx={{height:'95vh',display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Lottie animationData={loaderData} />
    </Box>
  )
}

export default RenderLoader