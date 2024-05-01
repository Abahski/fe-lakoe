import { Box, Card, CardContent, Checkbox } from '@mui/material';
import React from 'react';
import ContentMain from './contentMain';

const CONTENT = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wONGRXJUYYK6Pg-Kgvb87Ml5eaEmX6Je0IdKZHDTAg&s",
        merek: "CREWNECK BASIC",
        warna: "BLACK",
        tipe: "sweater dawduh os",
        sku: "0219AKD192",
        stok: "20",
        jumlah: "1",
        harga: "190.000"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5h5Y3hJ1lM0jLirxF-FFUNnYD2dsn1ym5gATIynuZQ&s",
        merek: "CREWNECK BASIC 1",
        warna: "BLACK 1",
        tipe: "sweater 1 sdflksje ",
        sku: "0219AKD193",
        stok: "20",
        jumlah: "1",
        harga: "190.000"
    }
]

const CardProduk = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box>
            <Box sx={{ minWidth: 275 }}>
                {CONTENT.map((item, index) => (
                    <Card variant="outlined" key={index} sx={{ marginBottom: "10px" }}>
                        <React.Fragment>
                            <CardContent>
                                <Box display={"flex"} flexDirection={"row"}>
                                    {/* Image */}
                                    <Box flex={1}>
                                        <img src={item.image} alt={item.image} width={130} height={150} />
                                    </Box>
                                    {/* End Image */}
                                    <Box flex={3.4}>
                                        {/* Main */}
                                           <ContentMain {...item} />
                                        {/* End Main */}
                                    </Box>
                                    <Box flex={0.2} display={'flex'}>
                                        {/* Option */}
                                            <Box>
                                                <Checkbox {...label} defaultChecked sx={{ marginBottom: "109px"}} />
                                            </Box>
                                        <Box>
                                            {/* Toggle */}
                                            {/* EndToggle */}
                                        </Box>
                                        {/* End Option */}
                                    </Box>
                                </Box>
                            </CardContent>
                        </React.Fragment>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default CardProduk;
