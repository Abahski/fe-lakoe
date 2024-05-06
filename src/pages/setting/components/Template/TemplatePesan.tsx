import { Box } from "@mui/system";
import ModalTemplate from "./ModalTemplate";
import ModalDeleteTemplate from "./ModalDeleteTemplate";
import ModalEditTemplate from "./ModalEditTemplate";

const TemplatePesan = () => {
  return (
    <>
      <Box
        display={"flex"}

        width={700}

        justifyContent={"space-between"}
        gap={2}
        my={2}
        alignItems={"center"}
      >
        <Box>
          <Box fontWeight={"bold"} sx={{ fontFamily: "poppins" }}>
            Template Pesan
          </Box>
        </Box>
        <Box>
          <ModalTemplate />
        </Box>
      </Box>

      <Box mt={3} border={"1px solid #DDDDDD"} borderRadius={3} p={2} mb={1}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Box fontWeight={"bold"} sx={{ fontFamily: "poppins" }}>
              Pesan Konfirmasi Pesan
            </Box>
          </Box>
          <Box display={"flex"} gap={1}>
            <Box
              sx={{ cursor: "pointer", fontSize: 15, color: "gray" }}
              display={"flex"}
              gap={1}
            >
              <ModalEditTemplate />
            </Box>
            <Box
              sx={{ cursor: "pointer", fontSize: 15, color: "gray" }}
              display={"flex"}
              gap={1}
            >
              <ModalDeleteTemplate />
            </Box>
          </Box>
        </Box>
        <Box mt={1}>
          <Box fontSize={14} color={"gray"} mb={1}>
            Halo! Terima kasih telah berbelanja di Fesyen Store. Berikut rincian
            pesanan Anda:
          </Box>
          <Box ml={1}>
            <Box fontSize={14} color={"gray"}>
              • Nama Produk: [Nama Produk]
            </Box>
            <Box fontSize={14} color={"gray"}>
              • Jumlah: [Jumlah]
            </Box>
            <Box fontSize={14} color={"gray"}>
              • Total Harga: [Total Harga] Mohon konfirmasi pesanan Anda. Terima
              kasih
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TemplatePesan;
