import { Box, Typography } from "@mui/material";
import { RiFileListLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListOrder from "./steeper";
import { useState } from "react";

interface IStatus {
    status: string | undefined
}

const Status = ({ status }: IStatus) => {
    const [title, setTitle] = useState(false)
    return (
        <Box
            alignSelf={"flex-start"}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            p={1}
            bgcolor={"#ffffff"}
            borderRadius={3}

        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                width={"100%"}
            >
                <Box display={"flex"} gap={1} alignItems={"center"}>
                    <RiFileListLine size={20} color="#147af3" />
                    <Typography
                        variant="body2"
                        bgcolor={
                            status === "belumdibayar" ? "#ffa733"
                                : status === "pesananbaru" ? "green"
                                    : status === "siapdikirim" ? "blue"
                                        : status === "dalampengiriman" ? "#ffa733"
                                            : status === "pesananselesai" ? "#e6e6e6"
                                                : status === "dibatalkan" ? "red" : ""
                        }
                        borderRadius={2}
                        px={1.5}
                        py={0.5}
                        color={status === "belumdibayar" ? "" : status === "pesananselesai" ? "" : "white"}
                        width={"fit-content"}
                        fontWeight={"600"}
                        fontSize={"13px"}
                        fontFamily={"YourCustomFont"}
                    >
                        {status === "belumdibayar" ? "Belum Dibayar"
                            : status === "pesananbaru" ? "Pesanan Baru"
                                : status === "siapdikirim" ? "Siap Dikirim"
                                    : status === "dalampengiriman" ? "Dalam Pengiriman"
                                        : status === "pesananselesai" ? "Pesanan Selesai"
                                            : status === "dibatalkan" ? "Dibatalkan" : ""
                        }
                    </Typography>
                </Box>
                <Typography fontWeight={400} ml={3} fontSize={12}>
                    Pesanan akan dibatalkan bila pembayaran tidak dilakukan <span style={{ fontWeight: '600' }}>sampai 10
                        Agustus 2023 - 00:00 WIB.</span> Silakan tunggu sampai pembayaran
                    terkonfirmasi sebelum mengirimkan barang.
                </Typography>
                <Box display={"flex"} onClick={() => setTitle(!title)} gap={1} alignItems={"center"} mt={1}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"

                        >
                            {!title ?
                                <Typography color={"#147af3"} width={650} fontWeight={600} fontSize={14} ml={3}>
                                    Lihat Riwayat Pemesanan
                                </Typography>
                                :
                                <Typography color={"#147af3"} width={650} fontWeight={600} fontSize={14} ml={3}>
                                    Sembunyikan
                                </Typography>
                            }
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display={'flex'} alignItems={'center'} gap={1}>
                                <ListOrder status={status} />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}
export default Status