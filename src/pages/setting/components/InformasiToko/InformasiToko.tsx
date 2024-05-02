import {
  Box,
  Button,
  FormLabel,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";

const InformasiToko = () => {
  return (
    <>
      <Box fontWeight={"bold"}>Informasi Toko</Box>
      <form action="">
        <Box display={"flex"} gap={2}>
          <Box display={"flex"} flexDirection={"column"} width={"50%"}>
            <FormLabel sx={{ mt: 2 }}>Slogan</FormLabel>
            <input
              placeholder="Slogan"
              type="text"
              style={{
                width: "100%",
                outline: "none",
                padding: "5px",
                boxSizing: "border-box",
                borderRadius: "5px",
                border: "1px solid gray",
              }}
            ></input>
            <FormLabel sx={{ mt: 2 }}>Nama Toko</FormLabel>
            <input
              placeholder="Nama Toko"
              type="text"
              style={{
                width: "100%",
                padding: "5px",
                boxSizing: "border-box",
                borderRadius: "5px",
                border: "1px solid gray",
              }}
            ></input>
          </Box>
          <Box display={"flex"} flexDirection={"column"} width={"50%"}>
            <FormLabel sx={{ mt: 2 }}>Deskripsi</FormLabel>
            <textarea
              name=""
              id=""
              placeholder="Deskripsi"
              style={{
                resize: "none",
                height: "100%",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid gray",
              }}
            ></textarea>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            sx={{
              my: 1,
              fontWeight: "bold",
              backgroundColor: "#1890ff",
              color: "white",
              padding: "5px 15px",
              boxSizing: "border-box",
              borderRadius: "15px",
            }}
          >
            Simpan
          </Button>
        </Box>
        <Box>
          <FormLabel sx={{ fontWeight: "bold" }}>Logo Toko</FormLabel>
          <Box display="flex" alignItems="center" mt={2}>
            <Input
              type="file"
              inputProps={{ accept: "image/*" }}
              sx={{
                display: "none",
              }}
              id="fileInput"
            />
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              <Box
                width={100}
                height={100}
                border="1px solid #ccc"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <IconButton component="span">
                  <PhotoIcon />
                </IconButton>
                <Typography>Upload Logo</Typography>
              </Box>
            </label>
          </Box>
          <Box fontSize={12} color={"gray"} mt={1}>
            Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10
            Megabytes. Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
          </Box>
        </Box>
      </form>
    </>
  );
};

export default InformasiToko;
