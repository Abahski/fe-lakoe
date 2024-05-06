import { Box, Typography } from "@mui/material";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const VariantProduk = () => {
  return (
    <Box
      sx={{
        height: "88px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
      }}
      display={"flex"}
      gap={3}
      alignItems={"center"}
      px={2}
    >
      <Box>
        <Typography fontWeight={"bold"}>Varian Produk</Typography>
        <Typography>Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!</Typography>
      </Box>
      <Box>
        <Box sx={{
          backgroundColor: '#ffffff',
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
          border: "solid black 1px",
          borderRadius: 10,
          padding: 1,
          px: 2
        }}>
          <Box display={"flex"} gap={1} justifyContent={"center"} alignItems={"center"}>
            <CiCirclePlus size={25} />
            <Typography>Tambah Produk</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VariantProduk;
