import { Box, Typography } from "@mui/material";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Header/Hero";
import HeaderCard from "./components/Header/HeaderCard";
import Content from "./components/Main/Content";
import Footer from "./components/Footer";
import ProductIndex from "./components/Main/Content/product";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { productAsync } from "../store/async/product";
import CategoryList from "./components/Main/Category/categoryList";

const HomePage = () => {
  const  dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);
  const auth  = useAppSelector((state) => state.auth)
  console.log(!auth.user, "non auth")
  useEffect(() => {
    dispatch(productAsync())
  },[dispatch])
  return (
    <Box>
      <Box display={"flex"} justifyContent={"center"} height={"100vh"} mb={25}>
        <Navbar />
        <Hero />
        <HeaderCard />
      </Box>
      <Box>
        <Content />
        <Box display={"flex"} flexDirection={"column"} my={5}>
          <Typography fontWeight={"bold"} variant="h3" textAlign={"center"}>
            List Produk
          </Typography>
          <CategoryList />
          <Box display={"flex"}my={5} px={5} gap={2}>
              <ProductIndex products={products}/>
          </Box>
        </Box>
      </Box>
      <Box mt={10}>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;
