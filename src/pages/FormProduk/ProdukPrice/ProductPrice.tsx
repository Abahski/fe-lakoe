import {
  Box,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductPriceValidation, {
  IProductPriceForm,
} from "../../../lib/hooks/validation/useProductPriceValidation";
import React from "react";

function ProductPriceField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8f8f8",
                padding: "8px",
                borderRadius: "8px 0 0 8px",
                marginRight: "8px",
                marginLeft: "-13px",
                height: "40px",
                color: "#1d1d1d",
              }}
            >
              <Typography variant="body1" align="center">
                Rp
              </Typography>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}

function ProductQuantityField(props: TextFieldProps) {
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
                Produk
              </Typography>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}

const ProductPrice = () => {
  const [prices, setPrices] = React.useState("");
  const [quantity, setQuaintity] = React.useState("");
  const { reset, control, handleSubmit } = useProductPriceValidation();

  const SubmitHandler: SubmitHandler<IProductPriceForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handeSubmitError: SubmitErrorHandler<IProductPriceForm> = (errors) => {
    alert("error" + JSON.stringify(errors, null, 2));
  };

  const handlePricesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrices(e.currentTarget.value);
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuaintity(e.currentTarget.value);
  };

  return (
    <Box>
      <Box
        sx={{
          height: "268px",
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
            Harga
          </Typography>
        </Box>
        <Box sx={{ height: "328px", gap: 2, ml: 2, mr: 2 }}>
          <form onSubmit={handleSubmit(SubmitHandler, handeSubmitError)}>
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
                Harga*
              </Typography>
              <Controller
                control={control}
                name="price"
                render={({ field, fieldState }) => (
                  <ProductPriceField
                    fullWidth
                    placeholder="Masukkan harga satuan barang"
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        height: "40px",
                        pl: "4px",
                        pr: "4px",
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      },
                    }}
                    {...field}
                    onChange={(e) =>
                      field.onChange(e.target.value.replace(/\D/g, ""))
                    }
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Box>
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
                Minimal Pembelian
              </Typography>
              <Controller
                control={control}
                name="minimum_buy"
                render={({ field, fieldState }) => (
                  <ProductQuantityField
                    fullWidth
                    placeholder="1"
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        height: "40px",
                        pl: "4px",
                        pr: "4px",
                      },
                    }}
                    {...field}
                    onChange={(e) =>
                      field.onChange(e.target.value.replace(/\D/g, ""))
                    }
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPrice;
