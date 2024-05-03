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
import Count from './components/Count';



const DaftarPesanan = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box display={"flex"} width={750} py={4} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} bgcolor={"#ffffff"} my={3} borderRadius={5}>
            <Box display={"flex"} justifySelf={"start"} pl={5} width={"100%"}>
                <Typography fontWeight={"bold"}>
                    Daftar Pesanan
                </Typography>
            </Box>
            <Box sx={{ bgcolor: 'background.paper', width: "100%", px: 3 }} fontWeight={"bold"}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"

                >
                    <Tab style={{ fontSize: 12, fontWeight: "bold", color: "black" }} label="Semua" />
                    <Tab icon={<Count count={2} />} style={{ fontSize: 12, fontWeight: "bold", color: "black" }} iconPosition='start' label="Belum Dibayar" />
                    <Tab icon={<Count count={2} />} style={{ fontSize: 12, fontWeight: "bold", color: "black" }} iconPosition='start' label="Pesanan Baru" />
                    <Tab icon={<Count count={5} />} style={{ fontSize: 12, fontWeight: "bold", color: "black" }} iconPosition='start' label="Siap Dikirim" />
                    <Tab icon={<Count count={2} />} style={{ fontSize: 12, fontWeight: "bold", color: "black" }} iconPosition='start' label="Dalam Pengiriman" />
                    <Tab icon={<Count count={2} />} style={{ fontSize: 12, fontWeight: "bold", color: "black" }} iconPosition='start' label="Pesanan Selesai" />
                    <Tab icon={<Count count={2} />} style={{ fontSize: 12, fontWeight: "bold", color: "black" }} iconPosition='start' label="Dibatalkan" />
                </Tabs>
                <Box display={"flex"} py={1} alignItems={"center"} justifyContent={"space-between"} gap={2}>
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