import { Box } from "@mui/material"
import Tabs from "./components/tabs";
import Header from "./components/header";

const Produk = () => {
return (
    <Box bgcolor={'#ffffff'}>
        {/* header */}
        <Header/>
        {/* end header */}
        {/* tab */}
        <Tabs/>
        {/* end Tab */}
    </Box>
  )
}

export default Produk
