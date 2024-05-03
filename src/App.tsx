
import { Box } from '@mui/material'
import RootLayout from './layouts/RootLayout'
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produk from './pages/Produk'
import DaftarPesanan from './pages/Pesanan'
import FormProduk from './pages/FormProduk'
import FesyenStore from './pages/setting'
import OrderDetail from './pages/Pesanan/OrderDetail'
const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/produk' element={<Produk />} />
          <Route path='/produk/formproduk' element={<FormProduk />} />
          <Route path='/pesanan' element={<DaftarPesanan />} />
          <Route path='/pesanan/detailorder/:status' element={<OrderDetail />} />
          <Route path="/setting/atur-toko" element={<FesyenStore />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

