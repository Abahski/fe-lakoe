import { Box, Typography } from "@mui/material";
import { BsBoxSeam } from "react-icons/bs";
import fotoBaju from "../../../assets/Rectangle 40352.jpg";
const DetailProduk = () => {
  return (
    <Box bgcolor={"#ffffff"} mt={0.5} p={1}   borderRadius={3}>
      <Box display={"flex"} flexDirection={"column"} gap={1} px={2}>
        <Box display={"flex"} alignItems={"center"} gap={1} >
          <BsBoxSeam size={21} color="#40a4c7" />
          <Typography fontWeight={"bold"} fontSize={14}>Produk</Typography>
        </Box>
        {/* image product */}
        <Box ml={5} display={"flex"} gap={2} >
          <img
            src={fotoBaju}
            alt="foto"
            style={{ width: 50, height: 50, objectFit: "cover" }}
          />
          {/* Name Product */}
          <Box >
            <Typography fontWeight={"600"} fontSize={14}>
              CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S
            </Typography>
            {/* Price and quantity */}
            <Box display={"flex"} gap={1}>
              <Typography fontSize={14}>1 x </Typography>
              <Typography fontWeight={"600"} fontSize={13}>
                Rp. 100.000
              </Typography>
            </Box>
          </Box>
          {/* Total */}
          <Box ml={4}>
            <Typography fontWeight={"200"} fontSize={12}>
              Total Belanja
            </Typography>
            <Typography fontWeight={"600"} fontSize={12}>Rp. 1000.000</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailProduk;
