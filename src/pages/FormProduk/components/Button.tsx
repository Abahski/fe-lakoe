import { Box, Button } from "@mui/material";

const ButtonSubmit = () => {
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
      <Button
        sx={{
          color: "#1d1d1d",
          borderRadius: "20px",
          borderColor: "#d5d5d5",
          border: "1px solid",
          fontSize: "14px",
        }}
      >
        Preview Halaman Checkout
      </Button>
      <Box>
        <Button
          sx={{
            color: "#1d1d1d",
            borderRadius: "20px",
            borderColor: "#d5d5d5",
            border: "1px solid",
            mr: 1,
            width: "100px",
          }}
        >
          Batal
        </Button>
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

export default ButtonSubmit;
