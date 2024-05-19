import RootLayout from "./layouts/RootLayout";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Produk from "./pages/Produk";
import FormProduk from "./pages/FormProduk";
import FesyenStore from "./pages/setting";
import Dashboard from "./pages/Dashboard";
import DaftarPesanan from "./pages/Pesanan";
import OrderDetail from "./pages/Pesanan/OrderDetail";
import Login from "./Home/Login";
import Register from "./Home/Register";
import HomePage from "./Home";
import React from "react";
import { PublicRoute } from "./routeComponents";
  
const App: React.FC = () => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token ? true : false;

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<PublicRoute element={<Login />} isAuthenticated={isAuthenticated} />}
          />
          <Route 
            path="/register" 
            element={<PublicRoute element={<Register />} isAuthenticated={isAuthenticated} />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<RootLayout />}>
            <Route path="/produk" element={<Produk />} />
            <Route path="/produk/formproduk" element={<FormProduk />} />
            <Route path="/pesanan" element={<DaftarPesanan />} />
            <Route
              path="/pesanan/detailorder/:status"
              element={<OrderDetail />}
            />
            <Route path="/setting/atur-toko" element={<FesyenStore />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};
export default App;
