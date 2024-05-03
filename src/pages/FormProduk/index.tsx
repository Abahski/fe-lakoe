import React from "react";
import ProductForm from "./ProdukForm/ProductForm";
import ProductDetail from "./ProdukDetail/ProductDetail";
import { Box } from "@mui/material";
import VariantProduk from "./VarianProduk/VariantProduk";
import ProductPrice from "./ProdukPrice/ProductPrice";
import ProductManagement from "./ProdukManajemen/ProductManagement";
import WeightShippingProduct from "./BeratPengiriman/WeightShippingProduct";
import ButtonSubmitFormProduk from "./ButtonSubmit/Button";

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
      <ButtonSubmitFormProduk />
    </Box>
  );
};

export default FormProduk;
