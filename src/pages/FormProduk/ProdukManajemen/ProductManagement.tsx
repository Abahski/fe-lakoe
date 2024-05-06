import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductManagementValidation, {
  IProductManagementForm,
} from "../../../lib/hooks/validation/useProductManagementValidation";

const ProductManagement = () => {
  const { reset, control, handleSubmit } = useProductManagementValidation();

  const SubmitHandler: SubmitHandler<IProductManagementForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handeSubmitError: SubmitErrorHandler<IProductManagementForm> = (
    errors
  ) => {
    alert("error" + JSON.stringify(errors, null, 2));
  };

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
        <Box sx={{ display: "flex", gap: 2, ml: 2, mr: 2 }}>
          {/* Form pertama */}
          <form style={{ width: "50%" }}>
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
                Stok Produk*
              </Typography>
              <Controller
                name="stock"
                control={control}
                render={({ field, fieldState }) => (
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

          {/* Form kedua */}
          <form style={{ width: "50%" }}>
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
              <Controller
                name="sku"
                control={control}
                render={({ field, fieldState }) => (
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

export default ProductManagement;
