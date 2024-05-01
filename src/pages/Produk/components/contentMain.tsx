import { Box, Button, Typography } from '@mui/material'
import React from 'react'

interface ContentMainProps  {
    merek: string,
    tipe: string
    harga: string,
    stok: string,
    sku: string
}

const ContentMain: React.FC<ContentMainProps> = ({ merek, tipe, harga, stok, sku }) => {
  return (
    <Box>
       <Box display={'flex'} >
            <Typography 
                variant="body1" 
                color="initial"
                fontWeight={"bold"}>
                {merek} - {tipe}
            </Typography> .
        </Box>
        <Box display={'flex'}>
            <Typography 
                variant="body2" 
                color="initial">
                Rp.{ harga}. 
            </Typography> 
            <Box sx={{ color: '#b0b0b0'}}>
                Stok:{stok} SKU:{sku}
            </Box>
        </Box>
        <Box display={'flex'} gap={0.6} mt={2}>
            <Button
                variant="outlined"
                sx={{ borderRadius: '20px', fontSize: '10px', color: 'black'}}
                size='large'>
                    Ubah Harga
            </Button>
            <Button 
                variant="outlined"
                sx={{ borderRadius: '20px',  fontSize: '10px', color: "black"}}
                size='large'>
                    Ubah Stok
            </Button>
            <Button 
                variant="outlined"
                sx={{ borderRadius: '20px',  fontSize: '10px', color: "black"}}
                size='large'>
                    Lihat Halaman
            </Button>
            <Button 
                variant="outlined"
                sx={{ borderRadius: '20px',  fontSize: '6px', color: "black"}}
                size='small'>
                ...
            </Button>
        </Box>
    </Box>
  )
}

export default ContentMain
