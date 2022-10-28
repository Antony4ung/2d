import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import svgImg from '../public/images/404.svg'

const NotFound = () => {

    const router = useRouter()

  return (
    <Box sx={{height:"92.5vh",width:'100vw',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Image width={150} height={150} src={svgImg} alt="404"/>
        <Typography
            sx={{ fontWeight: "bold", mt:5 }}
            color="text.primary"
            gutterBottom
            variant={"body1"}
          >
            Page not found
          </Typography>
          <Button sx={{mt:3}} variant="contained" onClick={()=> router.push('/')}>Return Home</Button>
    </Box>
  )
}

export default NotFound