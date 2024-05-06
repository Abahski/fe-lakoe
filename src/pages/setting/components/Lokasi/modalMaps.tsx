import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Maps from "./maps";

export default function ModalMaps() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Box mt={1} ml={1}>
          <Box fontWeight={"bold"} fontSize={12}>
            Pinpoint Lokasi
          </Box>
          <Box fontSize={10} color={"gray"}>
            Tandai Lokasi Untuk Mempermudah Permintaan Pickup Kurir
          </Box>
          <Maps data={"100px"} />
        </Box>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box>Tentukan titik pinpoint lokasi kamu</Box>
          <Box
            mt={1}
            ml={1}
            width={500}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mx={"auto"}
          >
            <Maps data={"300px"} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
