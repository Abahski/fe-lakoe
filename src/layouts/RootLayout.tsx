import { Box } from '@mui/material'
import Sidebar from './components/sidebar'
import SideContent from './components/sideContent'
import DaftarPesanan from '../Pesanan1/DaftarPesanan'
const RootLayout = () => {
    return (
        <>
            <Box sx={{ display: "flex", height: "100vh", }} gap={2}>
                <Box flex={1} height={"100vh"} bgcolor={'#ffffff'}>
                    <Sidebar />
                </Box>
                <Box flex={2.5} sx={{ overflowY: "auto" }} bgcolor={'#ffffff'} my={1}>
                    <DaftarPesanan />
                </Box>
                <Box flex={1.5} bgcolor={'#ffffff'}>
                    <SideContent />
                </Box>
            </Box>
        </>
    )
}

export default RootLayout