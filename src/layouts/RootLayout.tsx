import { Box } from '@mui/material'
import Sidebar from './components/sidebar'
import SideContent from './components/sideContent'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <Box sx={{ display: "flex", height: "100vh", }} gap={2}>
                <Box flex={1}>
                    <Sidebar />
                </Box>
                <Box flex={3.5}>
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