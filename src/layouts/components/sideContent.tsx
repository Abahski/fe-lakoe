import { Box, Typography } from '@mui/material'


const SideContent = () => {
  return (
    <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'100vh'}
      position={"fixed"}
      py={4}
      pl={4}
    >
      <Typography>
        kanan
      </Typography>
    </Box>
  )
}

export default SideContent