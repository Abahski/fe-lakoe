import { Box, Button, Typography } from '@mui/material'
import { CiCirclePlus } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box>
            <Box display={'flex'} p={2} borderRadius={3} alignItems={"center"} justifyContent={"space-between"}>
                <Box padding={1}>
                    <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
                        Daftar Produk
                    </Typography>
                </Box>
                <Box>
                    <Box display={"flex"}>
                        <Box sx={{
                            backgroundColor: '#0086b4',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#00719f',
                            },
                            '&:focus': {
                                outline: 'none',
                                backgroundColor: '#0086b4',
                            },
                            '&:active': {
                                backgroundColor: '#005e82',
                            },
                            borderRadius: 2,
                            padding: 1,
                            px: 2
                        }}>
                            <Link to={"/produk/formproduk"}>
                                <Box display={"flex"} gap={1} justifyContent={"center"} alignItems={"center"}>
                                    <CiCirclePlus size={25} />
                                    <Typography>Tambah Produk</Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
