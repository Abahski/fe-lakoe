import { Box } from '@mui/material'
import RootLayout from './layouts/RootLayout'
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produk from './pages/Produk'


const App = () => {

  return (
    <Box>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout /> }>
            <Route index element={<Home /> } />
            <Route path='/produk' element={<Produk /> } />
          </Route>
        </Routes>
        </BrowserRouter>
    </Box>
  )
}
export default App

