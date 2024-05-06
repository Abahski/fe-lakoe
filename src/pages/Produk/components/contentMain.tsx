import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import PagesIcon from '@mui/icons-material/Pages';


export interface ContentMainProps {
    id?: number;
    merek?: string;
    tipe?: string;
    harga?: string;
    stok?: string;
    sku?: string;

    varian?: string;
}

const ContentMain: React.FC<ContentMainProps> = ({ merek, tipe, harga, stok, sku, varian }) => {

    return (
        <Box >
            {varian &&
                <Button variant="contained" size='small' sx={{ borderRadius: '10px', marginBottom: '10px' }}>{varian}</Button>
            }
            <Box display={"flex"}>
                <Typography
                    variant="body1"
                    color="initial"
                    fontWeight={"bold"}>
                    {merek} - {tipe}
                </Typography> .
            </Box>
            <Box display={'flex'} gap={1} alignItems={"center"}>
                <Typography
                    variant="body2"
                    color="initial"
                    fontWeight={"bold"}>
                    Rp.{harga}
                </Typography>
                <CircleIcon style={{ fontSize: 6, color: '#b0b0b0' }} />
                <Box sx={{ color: '#b0b0b0' }}>
                    Stok : {stok}
                </Box>
                <CircleIcon style={{ fontSize: 6, color: '#b0b0b0' }} />
                <Box sx={{ color: '#b0b0b0' }}>
                    SKU : {sku}
                </Box>
            </Box>
            <Box display={'flex'} gap={1}>
                <Box
                    sx={{ borderRadius: '10px', fontSize: '10px', border: "solid grey 1px", fontWeight: "bold", color: 'black' }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    px={2}
                >
                    <Typography fontSize={13} fontWeight={"bold"}>
                        Ubah Harga
                    </Typography>
                </Box>
                <Box
                    sx={{ borderRadius: '10px', fontSize: '10px', border: "solid grey 1px", fontWeight: "bold", color: 'black' }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    px={2}
                >
                    <Typography fontSize={13} fontWeight={"bold"}>
                        Ubah Stok
                    </Typography>
                </Box>
                <Box
                    sx={{ borderRadius: '10px', fontSize: '10px', border: "solid grey 1px", fontWeight: "bold", color: 'black' }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    px={2}
                    gap={1}
                >
                    <PagesIcon />
                    <Typography fontSize={13} fontWeight={"bold"}>
                        Lihat Halaman
                    </Typography>
                </Box>

                <Box border={"solid 1px grey"} fontSize={15} borderRadius={100} width={30} height={30} display={"flex"} justifyContent={"center"} fontWeight={"bold"}>
                    ...
                </Box>

            </Box>
        </Box>
    )
}

export default ContentMain
