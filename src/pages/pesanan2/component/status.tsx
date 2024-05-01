import { Box, Typography } from "@mui/material";
import { RiFileListLine } from "react-icons/ri";

const Status = () => {
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
                    bgcolor={"yellow"}
                    color={"#ffffff"}
                    borderRadius={2}
                    p={0.5}
                    width={"fit-content"}
                    fontWeight={"600"}
                    fontSize={"13px"}
                    fontFamily={"YourCustomFont"}
                >
                    Siap Dikirim
                </Typography>
            </Box>
            <Typography fontWeight={400} ml={3} fontSize={12}>
                Pesanan akan dibatalkan bila pembayaran tidak dilakukan <span style={{ fontWeight: '600' }}>sampai 10
                Agustus 2023 - 00:00 WIB.</span> Silakan tunggu sampai pembayaran
                terkonfirmasi sebelum mengirimkan barang.
            </Typography>
            <Typography color={"#147af3"} fontWeight={600} fontSize={13} ml={3}>
                Lihat Riwayat Pesanan
            </Typography>
        </Box>
    </Box>
    )
}
    export default Status