import { Box } from "@mui/material";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import ButtonTombolLokasi from "./ModalTambahLokasi";
import ModalDelete from "./ModalDelete";
import ButtonTombolLEdit from "./ModalEdit";

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
          <Box fontWeight={"bold"}>lokasi Toko</Box>
          <Box fontSize={10} color={"gray"}>
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
        <Box width={"25%"}>
          <Box fontSize={10}>Nama Lokasi</Box>
          <Box fontSize={10}>Alamat</Box>
          <Box fontSize={10}>Kota / Kecamatan</Box>
          <Box fontSize={10}>Kode Pos</Box>
          <Box fontSize={10}>Pinpoint</Box>
        </Box>
        <Box width={"70%"}>
          <Box fontSize={10}>Fesyen Store</Box>
          <Box fontSize={10}>
            Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
          </Box>
          <Box fontSize={10}>Kota Tangerang Selatan, Kec. Ciputat</Box>
          <Box
            fontSize={10}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            color={"blue"}
          >
            <CiLocationOn />
            <Box>Sudah Ponpoint</Box>
          </Box>
          <Box fontSize={10}>Tes</Box>
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
        <Box width={"25%"}>
          <Box fontSize={10}>Nama Lokasi</Box>
          <Box fontSize={10}>Alamat</Box>
          <Box fontSize={10}>Kota / Kecamatan</Box>
          <Box fontSize={10}>Kode Pos</Box>
          <Box fontSize={10}>Pinpoint</Box>
        </Box>
        <Box width={"70%"}>
          <Box fontSize={10}>Fesyen Store</Box>
          <Box fontSize={10}>
            Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
          </Box>
          <Box fontSize={10}>Kota Tangerang Selatan, Kec. Ciputat</Box>
          <Box
            fontSize={10}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            color={"gray"}
          >
            <CiLocationOn />
            <Box>Sudah Ponpoint</Box>
          </Box>
          <Box fontSize={10}>Tes</Box>
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
