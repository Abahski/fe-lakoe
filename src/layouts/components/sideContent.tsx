import { Box, Typography } from '@mui/material'


const SideContent = () => {
  return (
    <Box display={'flex'}
    flexDirection={'column'} 
    justifyContent={'space-between'} 
    height={'100vh'}  
    ml={2} 
    pt={3}
    position={"fixed"}>
      <Typography>
        kanan
      </Typography>
    </Box>
  )
}

export default SideContent