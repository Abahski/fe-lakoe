import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TiDeleteOutline } from "react-icons/ti";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 500,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalTemplate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Button
          sx={{
            border: "1px solid gray",

            borderRadius: "5px",

            boxSizing: "border-box",
            fontWeight: "bold",
            backgroundColor: "#0086b4",
            color: "white",
            fontSize: "10px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Buat Template
        </Button>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >

            <Box fontWeight={"bold"} fontSize={15}>

              Buat Template Pesan Baru
            </Box>
            <Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TiDeleteOutline />
              </Box>
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <form action="">
              <Box display={"flex"} flexDirection={"column"}>
                <label
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  Judul Pesan
                </label>
                <input
                  type="text"
                  placeholder="Pesan"
                  style={{
                    width: "100%",
                    padding: "10px 5px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    outline: "none",
                    marginTop: "5px",
                  }}
                />
                <label
                  htmlFor=""
                  style={{
                    marginTop: "15px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  Detail Isi Pesan
                </label>
                <Box display={"flex"} gap={1} mt={1}>
                  <Button
                    sx={{
                      border: "1px solid gray",

                      borderRadius: "5px",

                      boxSizing: "border-box",
                      fontWeight: "bold",
                      backgroundColor: "#0086b4",
                      color: "white",
                      fontSize: "10px",
                      "&:hover": {
                        backgroundColor: "none",
                        color: "black",
                      },
                    }}
                  >
                    Nama Pembeli
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid gray",

                      borderRadius: "5px",

                      boxSizing: "border-box",
                      fontWeight: "bold",
                      backgroundColor: "#0086b4",
                      color: "white",
                      fontSize: "10px",
                      "&:hover": {
                        backgroundColor: "none",
                        color: "black",
                      },
                    }}
                  >
                    Nama Produk
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid gray",

                      borderRadius: "5px",

                      boxSizing: "border-box",
                      fontWeight: "bold",
                      backgroundColor: "#0086b4",
                      color: "white",
                      fontSize: "10px",
                      "&:hover": {
                        backgroundColor: "none",
                        color: "black",
                      },
                    }}
                  >
                    Nama Toko
                  </Button>
                </Box>
                <Box mt={2}>
                  <textarea
                    name=""
                    id=""
                    placeholder="Tuliskan isi pesan disini "
                    style={{
                      resize: "none",
                      width: "100%",
                      height: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid gray",
                    }}
                  ></textarea>
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
                      fontSize: "10px",
                      border: "1px solid gray",
                    }}

                    onClick={handleClose}

                  >
                    Batalkan
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
                      fontSize: "10px",
                      "&:hover": {
                        backgroundColor: "#1890ff",
                      },
                    }}
                  >
                    Simpan
                  </Button>
                </Box>
              </Box>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
