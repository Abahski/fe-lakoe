import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CiCalendar } from "react-icons/ci";
import { BiBarcode } from "react-icons/bi";
import { BiCopy } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
// import { IoAlertCircle } from "react-icons/io5";
// import Alert from '@mui/material/Alert';


const Invoice = () => {
  // const [showAlert, setShowAlert] = useState(false);

  // const handleCopyClick = () => {

  //   setShowAlert(true);

  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 5000); 
  // };

  return (
    <Box  bgcolor={"#ffffff"}  borderRadius={3} mt={0.5} p={1} >
      <Box display={"flex"} flexDirection={"column"} gap={1.5} px={2}>
        {/* Box tanggal */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={1}>
            <CiCalendar size={20} color={"#40a4c7"} />
            <Typography  fontSize={14} fontWeight={'bold'}>Tanggal</Typography>
          </Box>
          <Typography fontSize={12}>10/02/2022 - 19:43 WIB</Typography>
        </Box>
        {/* Box Invoice */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={1} >
            <BiBarcode size={20} color={"#40a4c7"} />
            <Typography fontSize={14}  fontWeight={'bold'}>Invoice</Typography>
          </Box>
          {/* <Box  display={"flex"} gap={1} justifyContent={'center'}> 
            <Alert sx={{bgcolor:"#2d2d2d", color:"white", width:"100%"}} icon={<IoAlertCircle color="white" />} severity="success">
             <Box display={"flex"}  justifyContent={"space-between"} gap={1} width={300}>
              <Typography>
                Nomor Invoice telah di salin
              </Typography>
              <Typography>
                OK!
              </Typography>
             
             </Box>
            </Alert>
            </Box> */}
          <Box display={"flex"} gap={1} >
            <BiCopy size={21} />
            <Typography fontSize={12}>INV/20230809/MPL/00000239</Typography>
          </Box>    
        </Box>
        {/* Box user */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={1}>
            <RxAvatar size={20} color={"#40a4c7"} /> 
            <Typography  fontWeight={'bold'}  fontSize={14} >Pembeli</Typography>
          </Box>
          <Box display={"flex"} gap={1}>
            <PiWhatsappLogoDuotone size={23} color="green" />
            <Typography  fontSize={13} fontWeight={'bold'}>Annur Syawila Hasibuan</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Invoice;
