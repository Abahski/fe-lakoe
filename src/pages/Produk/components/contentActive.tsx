import { Box, Card, CardContent, Tab, Typography } from "@mui/material"
import Header from "./header"
import React from "react"
import ContentFilter from "./contentFilter"
import { TabContext, TabList, TabPanel } from "@mui/lab"

const ContentAktif = () => {
    // open tab
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event, newValue)
    };
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ marginBottom: "10px" }}>
                <React.Fragment>
                    <CardContent>
                        <Box display={"flex"} flexDirection={"row"}>
                            <Box flex={3.4}>
                                <Header />
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
                                                    0 Produk
                                                </Typography>
                                            </Box>
                                            {/* end quantity */}
                                        </Box>
                                        <TabPanel value="1">
                                            {/* notFound */}
                                            <Box display={"flex"} justifyContent={"center"}>
                                                <Box display={"flex"} flexDirection={"column"}>
                                                    <Typography variant="h6" color="initial" >
                                                        Semua produk telah aktif
                                                    </Typography>
                                                    <Typography variant="body2" color="initial"
                                                        sx={{ color: "gray" }}>
                                                        Kamu bisa buat produk baru dan menyimpannya
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            {/* end-notFound */}
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
                        </Box>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default ContentAktif
