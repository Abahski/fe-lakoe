import React from "react";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import { Box } from "@mui/material";
import VariantProduk from "./components/VariantProduk";
import ProductPrice from "./components/ProductPrice";
import ProductManagement from "./components/ProductManagement";
import WeightShippingProduct from "./components/WeightShippingProduct";
import ButtonSubmit from "./components/Button";

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
      <ProductPrice />
      <ProductManagement />
      <WeightShippingProduct />
      <ButtonSubmit />
    </Box>
  );
};

export default FormProduk;
