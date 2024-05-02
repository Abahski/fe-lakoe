import { Box, Button, Typography } from "@mui/material";
import React from "react";

const VariantProduk = () => {
  return (
    <Box
      sx={{
        height: "88px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", 
        
      }}
    >
      <Box
        sx={{
          height: "50px",
          ml: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: "#1d1d1d",
            fontSize: "20px",
            pl: "4px",
            pb: "5px",
            pr: "4px",
            pt: "5px",
          }}
        >
          Varian Produk
        </Typography>
        <Typography
          sx={{
            ml: 0.5,
            fontSize: "16px",
            fontWeight: "400",
            color: "#909090",
          }}
        >
          Tambah varian agar pembeli dapat memiih produk yang sessual, yuk!
        </Typography>
      </Box>
      <Button
        variant="outlined"
        size="small"
        sx={{
          color: "#1d1d1d",
          borderRadius: "20px",
          borderColor: "#1d1d1d",
          height: "16px",
          alignSelf: "flex-start",
          mr: 2,
          mt: 4,
        }}
        style={{ height: "40px"}}
      >
        Tambah Varian
      </Button>
    </Box>
  );
};

export default VariantProduk;
