import { Box } from '@mui/material'
import RootLayout from './layouts/RootLayout'
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produk from './pages/Produk'
import DaftarPesanan from './pages/Pesanan'


const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/produk' element={<Produk />} />
            <Route path='/pesanan' element={<DaftarPesanan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}
export default App

