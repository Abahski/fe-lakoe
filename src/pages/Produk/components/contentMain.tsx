import { Box, Button, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import ModalAlert from '../../../components/modal/modalAlert'

export interface ContentMainProps {
    id?: number;
    merek?: string;
    tipe?: string;
    harga?: string;
    stok?: string;
    sku?: string;
    varian?: string; 
}

const ContentMain: React.FC<ContentMainProps> = ({  merek, tipe, harga, stok, sku, varian }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
   
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // show modal
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = () => {
        setShowModal(false)
    }

    return (
        <Box>
            {varian &&
                <Button variant="contained" size='small' sx={{ borderRadius: '10px', marginBottom: '10px' }}>{varian}</Button>
             }
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
                        <ModalAlert 
                            openModal={showModal} 
                            onClose={handleShowModal} 
                            showModalEdit={false}
                            showModalDelete={false}
                            showModalUbahStok={false}
                            showModalUbahHarga={true}
                        />
                </Button>
                <Button 
                    variant="outlined"
                    sx={{ borderRadius: '20px',  fontSize: '10px', color: "black"}}
                    size='large'>
                        <ModalAlert 
                            openModal={showModal} 
                            onClose={handleShowModal} 
                            showModalEdit={false}
                            showModalDelete={false}
                            showModalUbahStok={true}
                            showModalUbahHarga={false}
                        />
                </Button>
                <Button 
                    variant="outlined"
                    sx={{ borderRadius: '20px',  fontSize: '10px', color: "black"}}
                    size='large'>
                        Lihat Halaman
                </Button>
                <Button 
                    aria-describedby={id} 
                    onClick={handleClick}
                    variant="outlined"
                    sx={{ borderRadius: '20px',  fontSize: '10px', fontWeight: 'bold', color: "black" }}>
                    . . .
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    >
                    <Typography sx={{ p: 1, cursor: 'pointer' }}>
                        <ModalAlert 
                            openModal={showModal} 
                            onClose={handleShowModal}
                            showModalEdit={true}
                            showModalDelete={true}
                            showModalUbahStok={false}
                            showModalUbahHarga={false}
                        />
                    </Typography>
                </Popover>
            </Box>
        </Box>
    )
}

export default ContentMain
