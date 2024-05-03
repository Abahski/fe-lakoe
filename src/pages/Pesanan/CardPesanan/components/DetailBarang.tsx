import { Box, Typography } from '@mui/material'
import React from 'react'

const DetailBarang = ({ namaBarang, jumlahBarang, nominalBelanja }: any) => {
    return (
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box width={"13%"} display={"flex"} justifyContent={"center"}>
                <img src="./src/assets/Rectangle 40352.jpg" alt="" style={{ objectFit: "cover", borderRadius: 6 }} />
            </Box>
            <Box display={"flex"} width={"70%"} flexDirection={"column"}>
                <Typography fontWeight={"bold"}>{namaBarang}</Typography>
                <Typography>{jumlahBarang} Barang</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
                <Typography>Total belanja</Typography>
                <Typography fontWeight={"bold"}>Rp{nominalBelanja}</Typography>
            </Box>
        </Box>
    )
}

export default DetailBarang