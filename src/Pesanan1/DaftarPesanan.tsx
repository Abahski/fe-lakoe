import { Box, Typography } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const DaftarPesanan = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box bgcolor={"#ffffff"} m={3} borderRadius={5}>
            <Typography fontWeight={"bold"}>
                Daftar Pesanan
            </Typography>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }} fontWeight={"bold"}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Semua" />
                    <Tab label="Belum Dibayar" />
                    <Tab label="Pesanan Baru" />
                    <Tab label="Siap Dikirim" />
                    <Tab label="Dalam Pengiriman" />
                    <Tab label="Pesanan Selesai" />
                    <Tab label="Dibatalkan" />
                </Tabs>
                {value === 0 ? "ini adalah Page Semua"
                    : value === 1 ? "ini adalah page Belum Pesan"
                        : value === 2 ? "ini adalah page Pesanan Baru"
                            : value === 3 ? "ini adalah page Siap Dikirim"
                                : value === 4 ? "ini adalah page Dalam Pengiriman"
                                    : value === 5 ? "ini adalah page Pesanan Selesai"
                                        : value === 6 ? "ini adalah page Dibatalkan"
                                            : ''
                }
            </Box>
        </Box>
    )
}

export default DaftarPesanan