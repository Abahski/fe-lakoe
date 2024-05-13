import { Box, Button, TextField, Typography } from '@mui/material'
const ModalUbahHarga = () => {
  return (
    <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Ubah Harga 
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Ubah Harga untuk produk <b> KAOS BASIC POLOS - BUBBLE GUM COMBED BIOWASH 30s Kaos Polos - S akan dihapus.</b>
        </Typography>
        <Box mt={2}>
          <TextField fullWidth type='number' id="outlined-basic" label="...harga" variant="outlined" />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"} gap={1} mt={2}>
          <Button variant="outlined">Batalkan</Button>
          <Button variant="contained">Simpan</Button>
        </Box>
    </Box>
  )
}

export default ModalUbahHarga
