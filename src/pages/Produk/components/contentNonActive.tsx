import { Box, Card, CardContent, Checkbox, Tab, Typography } from "@mui/material"
import Header from "./header"
import React from "react"
import ContentFilter from "./contentFilter"
import { TabContext, TabList, TabPanel } from "@mui/lab"

const ContentNonActive = () => {
    // open tab
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        console.log(event, newValue)
    };
    return (
        <>
            <Box display={'flex'} alignItems={"center"} justifyContent={"space-between"} px={4}>
                {/* quantity */}
                <Box>
                    <Typography fontSize={22} fontWeight={"bold"}>
                        0 Produk
                    </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Typography>
                        Pilih Semua
                    </Typography>
                    <Checkbox />
                </Box>
                {/* end quantity */}
            </Box>
            <Box display={"flex"} mt={1} justifyContent={"center"}>
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant="h6" color="initial" >
                        Oppps, saat ini belum ada produk yg aktif
                    </Typography>
                    <Typography variant="body2" color="initial"
                        sx={{ color: "gray" }}>
                        Aktifkan produk kamu atau buat produk baru
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default ContentNonActive
