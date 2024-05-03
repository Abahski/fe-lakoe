import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Maps from "./maps";



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 700,

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ButtonTombolLokasi() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          border: "1px solid gray",
          borderRadius: "35px",
          boxSizing: "border-box",
          fontWeight: "bold",
          color: "black",
          fontSize: "12px",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onClick={handleOpen}
      >
        Tambah Lokasi
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} borderRadius={2} >
          <Typography
            sx={{ fontWeight: 700 }}

            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Tambah Lokasi Baru
          </Typography>
          <form action="">
            <Box display={"flex"} flexDirection={"column"}>

              <Box display={"flex"} alignItems={"center"} gap={1}>
                <label style={{ marginBottom: "5px", marginTop: "5px" }}>Tambah Lokasi</label>
                <Typography color={"red"}>*</Typography>
              </Box>
              <input
                type="text"
                placeholder="Tambah Lokasi"
                style={{
                  width: "100%",
                  height: "35px",
                  padding: "5px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                }}
              />
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <label style={{ marginBottom: "5px", marginTop: "5px" }}>Kota / Kecamatan</label>
                <Typography color={"red"}>*</Typography>
              </Box>
              <input
                type="text"
                placeholder="Kota / Kecamatan"
                style={{
                  width: "100%",
                  height: "35px",
                  padding: "5px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                }}
              />
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <label style={{ marginBottom: "5px", marginTop: "5px" }}>Kode Pos</label>
                <Typography color={"red"}>*</Typography>
              </Box>
              <input
                type="text"
                placeholder="Kode Pos"
                style={{
                  width: "100%",
                  height: "35px",
                  padding: "5px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                }}
              />
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <label style={{ marginBottom: "5px", marginTop: "5px" }}>Alamat Lengkap</label>
                <Typography color={"red"}>*</Typography>
              </Box>
              <input
                type="text"
                placeholder="Alamat Lengkap"
                style={{
                  width: "100%",
                  height: "35px",
                  padding: "5px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                }}
              />
            </Box>
            <Box mt={1} ml={1}>
              <Box fontWeight={"bold"} fontSize={12}>
                Pinpoint Lokasi
              </Box>
              <Box fontSize={10} color={"gray"} mb={1}>
                Tandai Lokasi Untuk Mempermudah Permintaan Pickup Kurir
              </Box>
              <Maps />
            </Box>

            <Box display={"flex"} justifyContent={"flex-end"} gap={"10px"}>
              <Button
                sx={{
                  my: 1,
                  fontWeight: "bold",
                  color: "black",
                  padding: "5px 15px",
                  boxSizing: "border-box",
                  borderRadius: "15px",
                }}
              >
                Batal
              </Button>
              <Button
                sx={{
                  my: 1,
                  fontWeight: "bold",
                  backgroundColor: "#1890ff",
                  color: "white",
                  padding: "5px 15px",
                  boxSizing: "border-box",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "#1890ff",
                  },
                }}
              >
                Simpan
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
