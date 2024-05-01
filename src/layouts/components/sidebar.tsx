import { Box, Typography } from '@mui/material'
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePentagon } from "react-icons/md";
import { IoMdCube } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
const Sidebar = () => {
  return (
    <Box display={'flex'}
      flexDirection={'column'} 
      justifyContent={'space-between'} 
      height={'100vh'}  
      ml={4} 
      pt={5}
      position={"fixed"}
      
      >
      <Box display={'flex'} flexDirection={'column'} gap={2} >
      <Typography display={'flex'} gap={1} sx={{fontWeight: '500'}}>
      <MdOutlinePentagon size={20} /> Dashboard
      </Typography>
        <Typography display={'flex'} gap={1} sx={{fontWeight: '500'}}>
        <IoMdCube size={20}/>  Produk
        </Typography>
      <Typography display={'flex'} gap={1} sx={{fontWeight: '500'}}>
      <LiaShoppingBagSolid size={20}/> Pesanan
      </Typography>
      <Typography display={'flex'} gap={1} sx={{fontWeight: '500'}}>
      <IoSettingsOutline size={20} />Pengaturan
      </Typography>
      </Box>
      <Box  pb={10}>
        <Typography display={'flex'} gap={1} sx={{fontWeight: '500'}}> 
        <RxAvatar size={20} /> Profile
        </Typography>
      </Box>
    </Box>
  )
}

export default Sidebar
