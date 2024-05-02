import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const ProductManagement = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "150px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            height: "50px",
            ml: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              color: "#1d1d1d",
              fontSize: "20px",
              pl: "4px",
              pb: "5px",
              pr: "4px",
              pt: "5px",
            }}
          >
            Pengelolaan Produk
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, ml: 2, mr: 2 }}>
          {/* Form pertama */}
          <form style={{ width: '50%' }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                paddingLeft: "4px",
                paddingRight: "4px",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  pl: "4px",
                  pr: "4px",
                }}
              >
                Stok Produk
              </Typography>
              <TextField
                fullWidth
                placeholder="Masukkan jumlah stok"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    height: "40px",
                    pl: "4px",
                    pr: "4px",
                  },
                }}
              />
            </Box>
          </form>

          {/* Form kedua */}
          <form style={{ width: '50%' }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                paddingLeft: "4px",
                paddingRight: "4px",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  pl: "4px",
                  pr: "4px",
                }}
              >
                SKU (Stock Keeping Unit)
              </Typography>
              <TextField
                fullWidth
                placeholder="Masukkan SKU"
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    height: "40px",
                    pl: "4px",
                    pr: "4px",
                  },
                }}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductManagement;



