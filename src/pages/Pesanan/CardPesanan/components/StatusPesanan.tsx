import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const StatusPesanan = ({ NoResi, StatusPesanan, tracking }: any) => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} borderBottom={1} mb={2} p={1}>
            <Box>
                <Box display={"flex"} justifyContent={"start"}>
                    <Typography fontSize={13} fontWeight={"bold"} borderRadius={2} py={0.5} px={1} bgcolor={StatusPesanan === "Belum Dibayar" ? "#ffa733" : StatusPesanan === "Pesanan Baru" ? "green" : StatusPesanan === "Siap Dikirim" ? "blue" : StatusPesanan === "Dalam Pengiriman" ? "#ffa733" :
                        StatusPesanan === "Pesanan Selesai" ? "#e6e6e6" : StatusPesanan === "Dibatalkan" ? "red" : ""
                    }
                        color={StatusPesanan === "Belum Dibayar" ? "" : StatusPesanan === "Pesanan Selesai" ? "" : "white"}
                    >{StatusPesanan}</Typography>
                </Box>
                {NoResi}
            </Box>
            <Box>
                <Typography fontSize={13} fontWeight={"bold"} borderRadius={1} py={0.5} px={1} border={1}>{tracking}</Typography>
            </Box>
        </Box>
    )
}

export default StatusPesanan