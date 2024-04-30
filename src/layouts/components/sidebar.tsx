import { Box, Typography } from '@mui/material'

const Sidebar = () => {
  return (
    <Box display={'flex'}
      flexDirection={'column'} 
      justifyContent={'space-between'} 
      height={'100vh'}  
      ml={2} 
      pt={3}
      position={"fixed"}
      zIndex={10}
      >
      <Box display={'flex'} flexDirection={'column'} gap={2} >
      <Typography>
        Dashboard
      </Typography>
      <Typography>
        Produk
      </Typography>
      <Typography>
        Pesanan
      </Typography>
      <Typography>
        Pengaturan
      </Typography>
      </Box>
      <Box  pb={10}>
        <Typography> 
            Profile
        </Typography>
      </Box>
    </Box>
  )
}

export default Sidebar
