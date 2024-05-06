import { Box } from "@mui/material";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import ButtonTombolLokasi from "./ModalTambahLokasi";
import ModalDelete from "./ModalDelete";
import ButtonTombolLEdit from "./ModalEdit";
import Maps from "./maps";

const Lokasi = () => {
  return (
    <>
      <Box
        display={"flex"}
        gap={2}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={4}
      >
        <Box>
          <Box fontWeight={"bold"} sx={{ fontFamily: "poppins" }}>
            lokasi Toko
          </Box>
          <Box color={"gray"}>
            Alamat ini akan digunakan sebagai alamat pengiriman mu
          </Box>
        </Box>
        <Box>
          <ButtonTombolLokasi />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        border={"1px solid #DDDDDD"}
        borderRadius={3}
        p={2}
        mb={1}
      >
        <Box width={"25%"} fontSize={14} color={"gray"}>
          <Box>Nama Lokasi</Box>
          <Box>Alamat</Box>
          <Box>Kota / Kecamatan</Box>
          <Box>Kode Pos</Box>
          <Box>Pinpoint</Box>
        </Box>
        <Box width={"70%"} fontSize={14} color={"gray"}>
          <Box>Fesyen Store</Box>
          <Box>Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan</Box>
          <Box>Kota Tangerang Selatan, Kec. Ciputat</Box>
          <Box>Tes</Box>
          <Box display={"flex"} gap={1} alignItems={"center"} color={"blue"}>
            <CiLocationOn />
            <Box>Sudah Ponpoint</Box>
          </Box>
        </Box>
        <Box width={"10%"}>
          <Box
            sx={{ cursor: "pointer", fontSize: 15, color: "gray" }}
            display={"flex"}
            gap={1}
          >
            <ModalDelete />
            <ButtonTombolLEdit />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        border={"1px solid #DDDDDD"}
        borderRadius={3}
        p={2}
        mb={1}
      >
        <Box width={"25%"} fontSize={14} color={"gray"}>
          <Box>Nama Lokasi</Box>
          <Box>Alamat</Box>
          <Box>Kota / Kecamatan</Box>
          <Box>Kode Pos</Box>
          <Box>Pinpoint</Box>
        </Box>
        <Box width={"70%"} fontSize={14} color={"gray"}>
          <Box>Fesyen Store</Box>
          <Box>Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan</Box>
          <Box>Kota Tangerang Selatan, Kec. Ciputat</Box>
          <Box>Tes</Box>
          <Box display={"flex"} gap={1} alignItems={"center"} color={"gray"}>
            <CiLocationOn />
            <Box>Sudah Ponpoint</Box>
          </Box>
        </Box>
        <Box width={"10%"}>
          <Box
            sx={{ cursor: "pointer", fontSize: 15, color: "gray" }}
            display={"flex"}
            gap={1}
          >
            <ModalDelete />
            <ButtonTombolLEdit />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Lokasi;
