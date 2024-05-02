import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Checkbox, Tab, Typography } from '@mui/material';
import React from 'react'
import CardProduk from './content';
import ContentFilter from './contentFilter';
const items = [
    {
        id: 1,
        image: "https://i.pinimg.com/736x/e9/b2/30/e9b2305bcbfc0920a9c4718050d7f62d.jpg",
        merek: "CREWNECK BASIC",
        warna: "BLACK",
        tipe: "sweater dawduh os",
        sku: "0219AKD192",
        varian: "4 varian",
        status: "active",
        stok: "20",
        jumlah: "1",
        harga: "190.000"
    },
    // {
    //     id: 2,
    //     image: "https://i.pinimg.com/564x/6f/c6/90/6fc690eec6fd8b0184eb7996a63b5b7c.jpg",
    //     merek: "CREWNECK BASIC",
    //     warna: "BLACK",
    //     tipe: "sweater dawduh os",
    //     sku: "0219AKD192",
    //     varian: "4 varian",
    //     status: "active",
    //     stok: "20",
    //     jumlah: "1",
    //     harga: "190.000"
    // },
    // {
    //     id: 3,
    //     image: "https://i.pinimg.com/564x/0a/cc/f9/0accf9505950d3fd9ac094541df7a4b5.jpg",
    //     merek: "CREWNECK BASIC 1",
    //     warna: "BLACK 1",
    //     tipe: "sweater 1 sdflksje ",
    //     sku: "0219AKD193",
    //     varian: "4 varian",
    //     status: "non-active",
    //     stok: "20",
    //     jumlah: "1",
    //     harga: "190.000"
    // },
    // {
    //     id: 4,
    //     image: "https://i.pinimg.com/564x/0d/bb/1a/0dbb1a88a13f631491b963804fc7850d.jpg",
    //     merek: "CREWNECK BASIC 1",
    //     warna: "BLACK 1",
    //     tipe: "sweater 1 sdflksje ",
    //     sku: "0219AKD193",
    //     status: "non-active",
    //     stok: "20",
    //     jumlah: "1",
    //     harga: "190.000"
    // },
    // {
    //     id: 5,
    //     image: "https://i.pinimg.com/564x/4f/b4/6c/4fb46cbcdc51660fb01bdd8528a8c03e.jpg",
    //     merek: "CREWNECK BASIC 1",
    //     warna: "BLACK 1",
    //     tipe: "sweater 1 sdflksje ",
    //     sku: "0219AKD193",
    //     status: "non-active",
    //     stok: "20",
    //     jumlah: "1",
    //     harga: "190.000"
    // },

];

const Tabs = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event, newValue)
    };

    const filterActive = items.filter(item => item.status === "active");
    const filterNonActive = items.filter(item => item.status === "non-active");

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box>
            <Box sx={{ width: '100%', typography: 'body2' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: '#0086b4' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Semua" value="1" />
                            <Tab label="Aktif" value="2" />
                            <Tab label="Nonaktif" value="3" />
                        </TabList>
                    </Box>
                    <ContentFilter />
                    <Box display={'flex'}>
                        <Box ml={3.5} flex={4.3}>
                            <Typography>
                                5 Produk
                            </Typography>
                        </Box>
                        <Box ml={28} flex={2} justifyContent={"flex-end"}>
                            Pilih Semua
                            <Checkbox
                                {...label}
                            />
                        </Box>
                    </Box>
                    <TabPanel value="1">
                        <CardProduk 
                            items={items}
                        />
                    </TabPanel>
                    <TabPanel value="2">
                        <CardProduk 
                            items={filterActive}
                        />
                    </TabPanel>
                    <TabPanel value="3">
                        <CardProduk 
                            items={filterNonActive}
                        />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Tabs
