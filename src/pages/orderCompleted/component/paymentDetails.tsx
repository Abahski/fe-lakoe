import { Typography, Box } from "@mui/material";
import { TfiWallet } from "react-icons/tfi";

const PaymentDetails = () => {
  return (
    <Box bgcolor={"#ffffff"} mt={0.5} p={1} px={2} borderRadius={3}>
      <Box display={"flex"} flexDirection={"column"} gap={1} px={2}>
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <TfiWallet size={20} />
        <Typography fontWeight={"bold"} fontSize={14}>
          Rincian Pembayaran
        </Typography>
      </Box>
      </Box>
      <Box ml={5.5}>
      <Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={12}>TotalHarga(1barang)</Typography>
        <Typography fontWeight={"600"} fontSize={13}> Rp.170000</Typography>
      </Box>
      <Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={12}>Total Ongkir(10kg)</Typography>
        <Typography fontWeight={"600"} fontSize={13}>Rp.10000</Typography>
      </Box>
      
      <Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={12}>Diskon</Typography>
        <Typography fontWeight={"600"} fontSize={13}>0</Typography>
      </Box>
      
      <Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={12}>Biaya Layanan</Typography>
        <Typography fontWeight={"600"} fontSize={13}>0</Typography>
      </Box>
      </Box>
      <Box  ml={5.5} display={"flex"} gap={1} alignItems={"center"} justifyContent={"space-between"} borderTop={"1px solid grey"} >
      <Typography fontWeight={"600"} fontSize={13} mt={1}>Total Penjualan</Typography>
        <Typography fontWeight={"600"} fontSize={13} mt={1}>Rp.180000</Typography>
      </Box>
    </Box>
  );
};
export default PaymentDetails;
