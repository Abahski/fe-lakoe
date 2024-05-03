import {
  Box,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React from "react";

function ProductWeightField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8f8f8",
                padding: "8px",
                borderRadius: "0 8px 8px 0",
                marginRight: "-13px",
                marginLeft: "8px",
                height: "40px",
                color: "#1d1d1d",
              }}
            >
              <Typography variant="body1" align="center">
                Gram
              </Typography>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}

function ProductMeasureField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8f8f8",
                padding: "8px",
                borderRadius: "0 8px 8px 0",
                marginRight: "-13px",
                marginLeft: "8px",
                height: "40px",
                color: "#1d1d1d",
              }}
            >
              <Typography variant="body1" align="center">
                cm
              </Typography>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}

const WeightShippingProduct = () => {
  const [weight, setWeight] = React.useState("");
  const [long, setLong] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [height, setHeight] = React.useState("");

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleLongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLong(event.target.value);
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          height: "260px",
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
            Berat & Pengiriman
          </Typography>
        </Box>
        <Box sx={{ height: "328px", gap: 2, ml: 2, mr: 2 }}>
          <form>
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
              <Box width={100}>
                <Box display={"flex"}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      pl: "4px",
                      pr: "4px",
                      width: "100%",
                    }}
                  >
                    Berat Produk
                  </Typography>
                  <Typography color={"red"}>*</Typography>
                </Box>
              </Box>

              <ProductWeightField
                fullWidth
                value={weight}
                onChange={handleWeightChange}
                placeholder="Masukkan berat produk!"
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
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
              mr: "auto",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box
                sx={{
                  gap: 1,
                  paddingLeft: "4px",
                  paddingRight: "4px",
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
                  Ukuran Produk
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, ml: 1 }}>
                <form style={{ width: "33%" }}>
                  <ProductMeasureField
                    fullWidth
                    value={long}
                    onChange={handleLongChange}
                    placeholder="Panjang"
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        height: "40px",
                        pl: "4px",
                        pr: "4px",
                      },
                    }}
                  />
                </form>
                <form style={{ width: "33%" }}>
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
                    <ProductMeasureField
                      fullWidth
                      value={width}
                      onChange={handleWidthChange}
                      placeholder="Lebar"
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
                <form style={{ width: "33%" }}>
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
                    <ProductMeasureField
                      fullWidth
                      value={height}
                      onChange={handleHeightChange}
                      placeholder="Tinggi"
                      InputProps={{
                        sx: {
                          borderRadius: "8px",
                          height: "40px",
                          pl: "4px",
                          pr: "4px",
                          mt: "4px",
                        },
                      }}
                    />
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeightShippingProduct;
