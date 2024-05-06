import { ButtonGroup } from "@mui/material";
import { Box, Button } from "@mui/material";
import Order from "./components/order";
import Sold from "./components/sold";
import Revenue from "./components/revenue";
import RecentOrder from "./components/recentOrder";
import Cart from "./components/cart";

const Summary = () => {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={3}
        >
          <Box
            fontWeight={"bold"}
            sx={{ fontFamily: "poppins" }}
            fontSize={20}
            ml={2}
          >
            Fesyen Store
          </Box>
          <Box>
            <input
              type="date"
              style={{
                borderRadius: "5px",
                padding: "5px 10px",
                border: "1px solid #d9d9d9",
                marginRight: "11px",
              }}
              placeholder="Last Mounth"
            />
          </Box>
        </Box>
        <Box mt={3} display={"flex"} justifyContent={"center"} gap={3}>
          <Order />
          <Sold />
          <Revenue />
        </Box>
        <Box mt={4} width={"100%"}>
          <Box
            fontWeight={"bold"}
            fontSize={24}
            textAlign={"center"}
            sx={{ fontFamily: "poppins" }}
          >
            Data Penjualan
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Cart />
          </Box>
        </Box>
        <Box mt={3}>
          <RecentOrder />
        </Box>
      </Box>
    </>
  );
};

export default Summary;
