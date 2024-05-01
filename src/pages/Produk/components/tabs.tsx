import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Checkbox, Tab, Typography } from '@mui/material';
import React from 'react'
import CardProduk from './content';
import ContentFilter from './contentFilter';

const Tabs = () => {
    // open tab
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event, newValue)
    };
    // close tab
    // all selected
        const [selectAllChecked, setSelectAllChecked] = React.useState(false);
        const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const checked = event.target.checked
            setSelectAllChecked(checked)
        }
    // close selected

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
                    {/* filter */}
                        <ContentFilter />
                    {/* endFilter */}
                    <Box display={'flex'}>
                        {/* quantity */}
                            <Box ml={3.5} flex={4.3}>
                                <Typography>
                                    5 Produk
                                </Typography>
                            </Box>
                            <Box ml={28} flex={2} justifyContent={"flex-end"}>
                                Pilih Semua
                                <Checkbox
                                    {...label}
                                    checked={selectAllChecked}
                                    onChange={handleSelectAllChange}
                                />
                            </Box>
                        {/* end quantity */}
                    </Box>
                    <TabPanel value="1">
                        {/* content */}
                            <CardProduk/>
                        {/* end-content */}
                    </TabPanel>
                    <TabPanel value="2">
                        Content Aktif
                    </TabPanel>
                    <TabPanel value="3">
                        Content Nonaktif
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default Tabs
