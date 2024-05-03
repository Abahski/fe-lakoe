import { Box,  Typography } from "@mui/material";
import { RiFileListLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListDelevery from "./steeper";


const Status = () => {
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
                      bgcolor={'#f68511'}
                      color={"#ffffff"}
                      borderRadius={1}
                      p={0.5}
                      display={"flex"}
                      justifyContent={"center"}
                      width={"18%"}
                      fontWeight={"600"}
                      fontSize={"12px"}
                >
                    Dalam Pengiriman
                </Typography>
            </Box>
            <Typography fontWeight={400} ml={3} fontSize={12}>
            Pesanan sudah dalam proses pengiriman. Silakan tunggu penerimaan barang oleh pembeli.
            </Typography>
            <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <Typography color={"#147af3"} fontWeight={600} fontSize={14} ml={3}>
                Lihat Riwayat Pesanan
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={'flex'} alignItems={'center'} gap={1}>
          <ListDelevery />
          </Box>
        </AccordionDetails>
      </Accordion>
            </Box>
        </Box>
    </Box>
    </Box>
    )
}
    export default Status