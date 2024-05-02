import { Box, Card, CardContent, Checkbox, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';
import ContentMain from './contentMain';

interface CardProdukProps {
    items: {
        id?: number;
        image?: string;
        merek?: string;
        warna?: string;
        tipe?: string;
        sku?: string;
        varian?: string;
        status?: string;
        stok?: string;
        jumlah?: string;
        harga?: string;
    }[];
}

const CardProduk: React.FC<CardProdukProps> = ({ items }) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
      setIsToggled((prevIsToggled: boolean) => !prevIsToggled);
    };
    return (
        <Box>
            <Box sx={{ minWidth: 275 }}>
                {items.map((item, index) => (
                    <Card variant="outlined" key={index} sx={{ marginBottom: "10px" }}>
                        <React.Fragment>
                            <CardContent>
                                <Box display={"flex"} flexDirection={"row"}>
                                    {/* Content */}
                                    <Box flex={1}>
                                        <img src={item.image} alt={item.image} width={130} height={150} />
                                    </Box>
                                    <Box flex={3.4}>
                                        <ContentMain {...item} />
                                    </Box>
                                    <Box flex={0.2} display={'flex'}>
                                        <Box>
                                            <Checkbox
                                                {...label}
                                            />
                                        </Box>
                                        <FormControlLabel
                                            control={
                                            <Switch
                                                key={item.id}
                                                checked={isToggled}
                                                onChange={handleToggle}
                                                color="primary"
                                            />
                                            }
                                            label=""
                                        />
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
