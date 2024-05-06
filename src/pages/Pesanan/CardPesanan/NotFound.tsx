import React from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} py={8} gap={2} alignItems={"center"}>
            <Box>
                <PolicyIcon fontSize='large' />
            </Box>
            <Box>
                <Typography fontWeight={"bold"}>Opps, pesanan yang kamu cari tidak ditemukan</Typography>
                <Typography fontSize={15} color={"grey"}>Coba bisa cari dengan kata kunci lain</Typography>
            </Box>
        </Box>
    )
}

export default NotFound