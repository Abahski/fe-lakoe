import { Box, Button, Typography } from '@mui/material'
const ModalUpdate = () => {
  return (
    <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Produk ?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Update Produk <b>KAOS BASIC POLOS - BUBBLE GUM COMBED BIOWASH 30s Kaos Polos - S akan dihapus.</b> 
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Update Produk yg dihapus tidak akan bisa dibatalkan. Pastikan produk yang kamu pilih itu sudah benar
        </Typography>
        <Box display={"flex"} justifyContent={"flex-end"} gap={1} mt={2}>
          <Button variant="outlined">Batalkan</Button>
          <Button variant="contained">Simpan</Button>
        </Box>
    </Box>
  )
}

export default ModalUpdate
