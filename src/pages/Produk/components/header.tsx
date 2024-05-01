import { Box, Button, Typography } from '@mui/material'
import { CiCirclePlus } from 'react-icons/ci'

const Header = () => {
  return (
    <Box>
       <Box display={'flex'}>
            <Box padding={1} flex={2}>
                <Typography sx={{fontWeight: "bold"}}>
                    Daftar Produk
                </Typography>
            </Box>
            <Box padding={1}
                 flex={2} 
                 justifyContent={"flex-end"}
                >
                <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button sx={{
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
                            borderRadius: '20px',
                        }} size="small">
                            <Box display={"flex"} gap={0.2} padding={0.2}>
                                <CiCirclePlus size={20}  />
                                Tambah Produk
                            </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Header
