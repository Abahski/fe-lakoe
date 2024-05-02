import { Box, Typography } from "@mui/material";
import { RiFileListLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListOrder from "./steeper";
import { useState } from "react";



const Status = () => {
  const [isCancelledVisible, setIsCancelledVisible] = useState(true);    
    return (
        <Box bgcolor={"#ffffff"}   borderRadius={3} >
        <Box
      alignSelf={"flex-start"}
      display={"flex"}
      alignItems={"center"}
      gap={2}
      p={1}  
    
    >
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1}
        >
            <Box display={"flex"} gap={1} alignItems={"center"}>
                <RiFileListLine size={20} color="#147af3" />
                <Typography
                    variant="body2"
                    bgcolor={'#147af3'}
                    borderRadius={1}
                    p={0.5}
                    color={"#ffffff"}
                    display={"flex"}
                    justifyContent={"center"}
                    width={"25%"}
                    fontWeight={"600"}
                    fontSize={"12px"}

                 
                >
                    Pesanan Baru
                </Typography>
            </Box>
            <Typography fontWeight={400} ml={3} fontSize={12}>
            Produk telah diterima oleh pembeli dan pesanan ini diselesaikan.
            </Typography>
            <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <Typography color={"#147af3"} fontWeight={600} fontSize={14} ml={3}>
         {isCancelledVisible ? 'Lihat Riwayat Pesanan' : 'Sembuyikan'}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
       
            <ListOrder />
       
        </AccordionDetails>
      </Accordion>
            </Box>
        </Box>
    </Box>
    </Box>
    )
}
    export default Status