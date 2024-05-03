import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { RiFileListLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListOrder from "./steeper";

const Status = () => {
    const [isCancelledVisible, setIsCancelledVisible] = useState(true);

    const toggleCancelledVisibility = () => {
        setIsCancelledVisible(!isCancelledVisible);
    };

    return (
        <Box bgcolor={"#ffffff"} borderRadius={3}>
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
                            bgcolor={'red'}
                            borderRadius={1}
                            color ={"#ffffff"}
                            p={0.5}
                            display={"flex"}
                            justifyContent={"center"}
                            width={"25%"}
                            fontWeight={"600"}
                            fontSize={"12px"}
                        >
                            Dibatalkan
                        </Typography>
                    </Box>
                  
                        <Typography fontWeight={400} ml={3} fontSize={12}>
                            Pesanan dibatalkan karena pembeli tidak melakukan Pembayaran tepat waktu
                        </Typography>
                    
                    <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                onClick={toggleCancelledVisibility}
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
    );
};

export default Status;
