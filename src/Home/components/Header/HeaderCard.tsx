import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import { Box, Typography } from '@mui/material';

const HeaderCard = () => {
  return (
    <>
      <Box display={"flex"} position={"absolute"} bottom={-130} width={"100vw"} justifyContent={"space-evenly"} gap={2}>
        <Box width={350} height={250} gap={1} px={3} flexDirection={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} borderRadius={5} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
          <MessageIcon />
          <Typography fontSize={20} fontWeight={"bold"}>Awarded Agency</Typography>
          <Typography textAlign={"center"}>Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</Typography>
        </Box>
        <Box width={350} height={250} gap={1} px={3} flexDirection={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} borderRadius={5} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
          <MessageIcon />
          <Typography fontSize={20} fontWeight={"bold"}>Free Revisions</Typography>
          <Typography textAlign={"center"}>Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.</Typography>
        </Box>
        <Box width={350} height={250} gap={1} px={3} flexDirection={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} borderRadius={5} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
          <MessageIcon />
          <Typography fontSize={20} fontWeight={"bold"}>Verified Company</Typography>
          <Typography textAlign={"center"}>Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!</Typography>
        </Box>
      </Box>
    </>

  )
}

export default HeaderCard
