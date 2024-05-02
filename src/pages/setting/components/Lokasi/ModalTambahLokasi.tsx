import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
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
        <Box sx={style}>
          <Typography
            sx={{ fontWeight: "bold" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Tambah Lokasi Baru
          </Typography>
          <form action="">
            <Box display={"flex"} flexDirection={"column"}>
              <label style={{ marginTop: "15px" }}>Tambah Lokasi</label>
              <input
                type="text"
                placeholder="Lokasi"
                style={{
                  width: "100%",
                  padding: "10px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                  marginTop: "5px",
                }}
              />
              <label style={{ marginTop: "15px" }}>Kota / Kecamtan</label>
              <input
                type="text"
                placeholder="Lokasi"
                style={{
                  width: "100%",
                  padding: "10px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                  marginTop: "5px",
                }}
              />
              <label style={{ marginTop: "15px" }}>Kode Pos</label>
              <input
                type="text"
                placeholder="Lokasi"
                style={{
                  width: "100%",
                  padding: "10px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                  marginTop: "5px",
                }}
              />
              <label style={{ marginTop: "15px" }}>Alamat Lengkap</label>
              <input
                type="text"
                placeholder="Lokasi"
                style={{
                  width: "100%",
                  padding: "10px 5px",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  outline: "none",
                  marginTop: "5px",
                }}
              />
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
