import { Box, Typography } from '@mui/material'
import { BiCopy } from 'react-icons/bi';
import { FaTruckFast } from "react-icons/fa6";

const OrderDetails = () => {
    return (
        <Box bgcolor={"#ffffff"} mt={0.5} p={1} borderRadius={3}>
            <Box display={"flex"} flexDirection={"column"} gap={0.5} px={2}>
                <Box display={"flex"} gap={1} alignItems={"center"} >
                    <FaTruckFast color='#40a4c7' size={20} /> <Typography fontWeight={"bold"} fontSize={13}>Detail Pengiriman</Typography>
                </Box>
                {/* expedisi */}
               <Box ml={3}>
                <Box display={"flex"} alignItems={"center"} gap={13} >
                    <Typography fontSize={14}>Kurir</Typography> 
                    <Box display={"flex"}  ml={5.5} alignItems={"start"} >
                        <Typography fontSize={12}>JNE</Typography>
                    </Box>
                </Box>
                {/* No resi */}
                <Box display={"flex"} gap={13} alignItems={"center"} >
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Typography fontSize={14}>No.Resi</Typography> <BiCopy size={19} />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} flex={1} >
                        <Typography>-</Typography>
                    </Box>
                </Box>
                {/* Address detail and Number Phone*/}
                <Box display={"flex"} alignItems={"center"} gap={13}  >
                  <Box display={"flex"} alignItems={"center"} gap={1} mt={-4}>
                    <Typography fontSize={14} >Alamat</Typography>  <BiCopy size={19} />
                    </Box>
                    <Box display={"flex"} alignItems={"start"}flexDirection={'column'}>
                        <Typography fontSize={12}>Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan</Typography>
                        <Typography fontSize={12} >081234567890</Typography>
                        <Typography fontSize={12}>Annur Syawila Hasibuan</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OrderDetails;
