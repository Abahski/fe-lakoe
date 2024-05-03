import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Checkbox, MenuItem, Tab, TextField, Typography } from '@mui/material';
import React from 'react'
import CardProduk from './content';
import ContentFilter from './contentFilter';

import ContentAktif from './contentActive';
import ContentNonActive from './contentNonActive';

const items: any[] = [

    {
        id: 1,
        image: "https://i.pinimg.com/736x/e9/b2/30/e9b2305bcbfc0920a9c4718050d7f62d.jpg",
        merek: "CREWNECK BASIC",
        warna: "BLACK",
        tipe: "sweater dawduh os",
        sku: "0219AKD192",
        varian: "4 varian",
        status: "active",

        stok: 20,
        jumlah: 1,
        harga: "190.000"
    },
    {
        id: 2,
        image: "https://i.pinimg.com/736x/e9/b2/30/e9b2305bcbfc0920a9c4718050d7f62d.jpg",
        merek: "CREWNECK BASIC",
        warna: "BLACK",
        tipe: "sweater dawduh os",
        sku: "0219AKD192",
        varian: "4 varian",
        status: "active",
        stok: 20,
        jumlah: 1,
        harga: "190.000"
    },
    {
        id: 3,
        image: "https://i.pinimg.com/736x/e9/b2/30/e9b2305bcbfc0920a9c4718050d7f62d.jpg",
        merek: "CREWNECK BASIC",
        warna: "BLACK",
        tipe: "sweater dawduh os",
        sku: "0219AKD192",
        varian: "4 varian",
        status: "non-active",
        stok: 20,
        jumlah: 1,
        harga: "190.000"
    },

];



const Tabs = () => {

    // open tab

    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event, newValue)
    };

    const filterActive = items.filter(item => item.status === "active");
    const filterNonActive = items.filter(item => item.status === "non-active");
<
    // close tab


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

                    <TabPanel value="1">
                        <CardProduk

                            items={items}
                        />
                    </TabPanel>
                    <TabPanel value="2">

                        {filterActive.length > 0 ? (
                            <CardProduk
                                items={filterActive}
                            />
                        ) : (
                            <ContentNonActive />
                        )}
                    </TabPanel>
                    <TabPanel value="3">
                        {filterNonActive.length > 0 ? (
                            <CardProduk
                                items={filterNonActive}
                            />
                        ) : (
                            <ContentAktif />
                        )}

                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Tabs
