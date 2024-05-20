import { Box, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import Status from "./component/status";
import Invoice from "./component/Invoice";
import DetailProduk from "./component/detailProduk";
import OrderDetails from "./component/orderDetails";
import PaymentDetails from "./component/paymentDetails";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
    const { status } = useParams()
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={3}
        >
            <Box display={"flex"} gap={0.2} alignItems={"center"}>
                <Typography fontSize={13} fontWeight={"bold"} color={"#40a4c7"}>Daftar Pesanan</Typography>
                <IoIosArrowForward size={13} color="grey" />
            </Box>
            <Status status={status} />
            <Invoice text=" INV/20230809/MPL/00000239" />
            <DetailProduk />
            <OrderDetails status={status} resiText="ini resi" addressText="balakang" fullnameText={["Rizki"]} phoneText={["0899999999"]} />
            <PaymentDetails />
        </Box>
    );
};

export default OrderDetail;
