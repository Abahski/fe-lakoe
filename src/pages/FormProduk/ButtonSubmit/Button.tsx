import { Box, Button } from "@mui/material";

const ButtonSubmitFormProduk = () => {
  return (
    <Box
      sx={{
        borderRadius: "9999px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        backgroundColor: "#ffffff",
        height: "72px",
      }}
    >
      <Box
        sx={{
          color: "#1d1d1d",
          borderRadius: "20px",
          borderColor: "#d5d5d5",
          border: "1px solid",
          fontSize: "14px",
          py: 1,
          px: 2,
          fontWeight: "bold"
        }}
      >
        Preview Halaman Checkout
      </Box>
      <Box display={"flex"} gap={2}>
        <Box
          sx={{
            color: "#1d1d1d",
            borderRadius: "20px",
            borderColor: "#d5d5d5",
            border: "1px solid",
            fontSize: "14px",
            py: 1,
            px: 3,
            fontWeight: "bold"
          }}
        >
          Batal
        </Box>
        <Button
          sx={{
            backgroundColor: "#0086b4",
            borderRadius: "20px",
            mr: 1,
            color: "#ffffff",
            width: "100px",
          }}
        >
          Simpan
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonSubmitFormProduk;
