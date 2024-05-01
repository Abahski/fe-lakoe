import { Image } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const DetailBarang = ({ namaBarang, jumlahBarang, nominalBelanja }: any) => {
    return (
        <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
                {/* <Image></Image> */}
                ini Image
            </Box>
            <Box display={"flex"} width={"65%"} flexDirection={"column"}>
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