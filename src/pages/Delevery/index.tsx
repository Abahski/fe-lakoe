
import { Box, Typography } from "@mui/material";
import Invoice from "./component/Invoice";
import DetailProduk from "./component/detailProduk";
import OrderDetails from "./component/orderDetails";
import PaymentDetails from "./component/paymentDetails";
import Status from "./component/status";
import { IoIosArrowForward } from "react-icons/io";
const OrderDetail = () => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={3}
        >
            <Box display={"flex"} gap={0.2} alignItems={"center"}>
            <Typography fontSize={13} fontWeight={"bold"} color={"#40a4c7"}>Daftar Pesanan </Typography> 
            <IoIosArrowForward  size={13} color="grey"/>
            </Box>
            <Status />
            <Invoice />
            <DetailProduk />
            <OrderDetails />
            <PaymentDetails />
        </Box>
    );
};

export default OrderDetail;
