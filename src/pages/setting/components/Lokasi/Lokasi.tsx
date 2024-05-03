import { Box } from "@mui/material";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiLocationOff, CiLocationOn } from "react-icons/ci";
import ButtonTombolLokasi from "./ModalTambahLokasi";
import ModalDelete from "./ModalDelete";
import ButtonTombolLEdit from "./ModalEdit";
import LokasiCard from "./components/LokasiCard";

const Lokasi = () => {
  return (
    <>
      <Box
        display={"flex"}

        width={750}
        gap={2}

        justifyContent={"space-between"}
        alignItems={"center"}
        mb={4}
      >
        <Box>
          <Box fontWeight={"bold"}>lokasi Toko</Box>
          <Box fontSize={10} color={"gray"}>

            Alamat ini akan digunakan sebagai alamat pengirimanmu

          </Box>
        </Box>
        <Box>
          <ButtonTombolLokasi />
        </Box>
      </Box>

      <LokasiCard utama={true} icon={<CiLocationOn />} PonPoint={"Sudah"} />
      <LokasiCard utama={false} icon={<CiLocationOff />} PonPoint={"Belum"} />

    </>
  );
};

export default Lokasi;
