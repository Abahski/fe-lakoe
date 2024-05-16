import RootLayout from "./layouts/RootLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produk from "./pages/Produk";
import FormProduk from "./pages/FormProduk";
import FesyenStore from "./pages/setting";
import Dashboard from "./pages/Dashboard";
import DaftarPesanan from "./pages/Pesanan";
import OrderDetail from "./pages/Pesanan/OrderDetail";
import Login from "./Home/Login";
import Register from "./Home/Register";
import HomePage from "./Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
