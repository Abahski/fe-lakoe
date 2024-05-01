import { Box, Typography } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Search from './components/Search';
import ButtonCheckKurir from './components/ButtonCheckKurir';
import ButtonCheckUrutkan from './components/ButtonCheckUrutkan';
import CardPesanan from './CardPesanan/CardPesanan';



const DaftarPesanan = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box p={3} bgcolor={"#ffffff"} my={3} borderRadius={5}>
            <Typography fontWeight={"bold"}>
                Daftar Pesanan
            </Typography>
            <Box sx={{ bgcolor: 'background.paper' }} fontWeight={"bold"}>
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
                <Box display={"flex"} gap={2}>
                    <Search />
                    <ButtonCheckKurir />
                    <ButtonCheckUrutkan />
                </Box>
                {value === 0 ? <CardPesanan side={value} />
                    : value === 1 ? <CardPesanan side={value} />
                        : value === 2 ? <CardPesanan side={value} />
                            : value === 3 ? <CardPesanan side={value} />
                                : value === 4 ? <CardPesanan side={value} />
                                    : value === 5 ? <CardPesanan side={value} />
                                        : value === 6 ? <CardPesanan side={value} />
                                            : ''
                }
            </Box>
        </Box>
    )
}

export default DaftarPesanan