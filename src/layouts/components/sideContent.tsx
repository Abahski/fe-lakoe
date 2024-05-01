import { Box, Typography } from '@mui/material'
import React from 'react'

const SideContent = () => {
  return (
    <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'100vh'}
      pl={2}
      width={"30%"}
      bgcolor={"#ffffff"}
      pt={3}
      position={"fixed"}>
      <Typography>
        kanan
      </Typography>
    </Box>
  )
}

export default SideContent