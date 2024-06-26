
import { Box, Card, CardContent, Checkbox, FormControlLabel, Typography } from '@mui/material';

import React, { useState } from 'react';
import ContentMain from './contentMain';
import Switch from '@mui/material/Switch';

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

        label: string;
        value: string;
    }[];
}

const CardProduk: React.FC<CardProdukProps> = ({ items }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevIsToggled: boolean) => !prevIsToggled);
    };
    const handleChecked = () => {
        setIsChecked((prevIsToggled: boolean) => !prevIsToggled);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box>
            <Box sx={{ minWidth: 275 }}>
                <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                    Pilih Semua
                    <Checkbox
                        checked={isChecked}
                        onChange={handleChecked}
                    />
                </Box>
                <Box display={"flex"} alignItems={"center"} >
                    <Typography >
                        5 Produk
                    </Typography>
                </Box>

                {items.map((item, index) => (
                    <Card variant="outlined" key={index} sx={{ marginBottom: "10px" }}>
                        <React.Fragment>
                            <CardContent>

                                <Box display={"flex"} gap={2} flexDirection={"row"}>
                                    {/* Content */}
                                    <Box >
                                        <Box display={"flex"}>
                                            <img src={item.image} alt={item.image} style={{ objectFit: "cover", borderRadius: 15, height: 120, width: 100 }} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <ContentMain {...item} />
                                    </Box>
                                    <Box display={'flex'}>
                                        <Box ml={"auto"}>
                                            <Checkbox
                                                key={item.id}
                                                checked={isChecked}
                                                onChange={handleChecked}

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
