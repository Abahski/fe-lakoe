import { Box } from '@mui/material'
import Sidebar from './components/sidebar'
import SideContent from './components/sideContent'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <Box sx={{ display: "flex" }} >
                <Box flex={1}>
                    <Sidebar />
                </Box>
                {/* <Box flex={4} p={2} py={4}> */}
                <Box flex={3.5} display={"flex"} justifyContent={"center"} p={2} py={4} height={"auto"} bgcolor={"#f8f8f8"}>
                    <Outlet />
                </Box>
                <Box flex={1.5}>
                    <SideContent />
                </Box>
            </Box>
        </>
    )
}

export default RootLayout