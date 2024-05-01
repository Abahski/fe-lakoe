import { Box, Typography } from '@mui/material'
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePentagon } from "react-icons/md";
import { IoMdCube } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Side = [
  {
    icon: <MdOutlinePentagon size={20} />,
    title: "Dashboard",
    link: "/"
  },
  {
    icon: <IoMdCube size={20} />,
    title: "Produk",
    link: "/produk"
  },
  {
    icon: <LiaShoppingBagSolid size={20} />,
    title: "Pesanan",
    link: "/pesanan"
  },
  {
    icon: <IoSettingsOutline size={20} />,
    title: "Pengaturan",
    link: "/pengaturan"
  },
]

const Sidebar = () => {
  return (
    <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={'100vh'}
      px={4}
      pt={5}
      bgcolor={'#ffffff'}
      position={"fixed"}
      width={"14%"}
    >

      <Box display={'flex'} flexDirection={'column'} gap={2} >
        {Side.map((item, index) => (
          <Link to={item.link} key={index}>
            <Typography display={'flex'} gap={1} sx={{ fontWeight: '500' }}>
              {item.icon} {item.title}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box pb={10}>
        <Link to={"/profile"}>
          <Typography display={'flex'} gap={1} sx={{ fontWeight: '500' }}>
            <RxAvatar size={20} /> Profile
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default Sidebar
