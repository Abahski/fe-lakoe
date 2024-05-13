import { Box, Typography } from "@mui/material";
import { BiCopy } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import ListOrder from "../../pages/Pesanan/OrderDetail/component/steeper"
interface IStatus {
  status: string | undefined
}
const Modal = ({ status }: IStatus) =>  {
  return (
    <Box>
    <Box   display={"flex"} flexDirection={"column"} width={"100%"} p={2}>
      <Box ml={-2} mb={2} display={"flex"} justifyContent={"space-between"} gap={1} >
        <Typography fontSize={14} fontWeight={"bold"}>
          Lacak Pengiriman
        </Typography>
        <TiDeleteOutline size={20} color={"grey"} />
      </Box>
      <Box display={"flex"} gap={35} >
        <Box>
          <Typography fontSize={13} fontWeight={"bold"}>
            Kurir
          </Typography>
          <Typography fontSize={12} fontWeight={"bold"}>
            J&T- REGULER
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} flexDirection={"column"}>
          <Typography fontSize={14} fontWeight={"bold"}>
            Penerima
          </Typography>
          <Typography fontSize={13}>Rizki Maulana</Typography>
        </Box>
      </Box>
      <Box display={"flex"} gap={35} >
        <Box>
          <Box display={"flex"} gap={1}>
            <Typography fontSize={13} fontWeight={"bold"}>
              No.Resi
            </Typography>
            <BiCopy />
          </Box>
          <Typography fontSize={12} fontWeight={"bold"}>
            J&T- REGULER
          </Typography>
        </Box>
        <Box width={250} mt={1}>
          <Typography fontSize={13} fontWeight={"bold"}>
            Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
            Banten 15413
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography fontSize={13} >pengirim</Typography>
        <Typography fontSize={13} >bakulan store</Typography>
      </Box>
    </Box>
    <Box p={2}>
      <Typography>Status: <span style={{fontWeight:"bold"}}>Tiba Di tujuan</span> </Typography>
    <ListOrder status={status}/>
    </Box>
    </Box>
  );
};
export default Modal;
