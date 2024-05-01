import React from "react";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import { Box } from "@mui/material";
import VariantProduk from "./components/VariantProduk";

const FormProduk = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      <ProductForm />
      <ProductDetail />
      <VariantProduk />
    </Box>
  );
};

export default FormProduk;
