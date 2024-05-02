import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: 4,
};

export default function ModalDelete() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box onClick={handleOpen}>
        <Box
          border={"1px solid gray"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={20}
          height={20}
          borderRadius={3}
        >
          <MdOutlineDeleteSweep />
        </Box>
      </Box>
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
            <Box fontWeight={"bold"} fontSize={12}>
              Hapus Alamat
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
          <Typography fontSize={12} id="modal-modal-description" sx={{ mt: 1 }}>
            Apakah kamu yakin untuk menghapus{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>Rumah ?</span>{" "}
            kamu tidak akan dapat mengembalikanalamat yang sudah dihapus
          </Typography>
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
              Ya, Hapus
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
