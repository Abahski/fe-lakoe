import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductDetailValidation, {
  IProductDetailForm,
} from "../../../lib/hooks/validation/useProductDetailValidation";

function ProductPageField(props: TextFieldProps) {
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
                lakoe.store/
              </Typography>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}

const ProductForm = () => {
  const [selectedCategory, selectedCategorySet] = React.useState("");
  const { reset, control, handleSubmit } = useProductDetailValidation();

  const SubmitHandler: SubmitHandler<IProductDetailForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handeSubmitError: SubmitErrorHandler<IProductDetailForm> = (errors) => {
    alert("error" + JSON.stringify(errors, null, 2));
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    selectedCategorySet(e.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          height: "368px",
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
            Informasi Produk
          </Typography>
        </Box>
        <Box sx={{ height: "3px", gap: 2, ml: 2, mr: 2 }}>
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
                Nama Produk*
              </Typography>

              <Controller
                control={control}
                name="nama_produk"
                render={({ field, fieldState }) => (
                  <TextField
                    fullWidth
                    placeholder="Masukkan nama produk"
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        height: "40px",
                        pl: "4px",
                        pr: "4px",
                      },
                    }}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field}
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
                URL Halaman Produk*
              </Typography>
              <Controller
                control={control}
                name="url_produk"
                render={({ field, fieldState }) => (
                  <ProductPageField
                    fullWidth
                    placeholder="nama-produk"
                    InputProps={{
                      sx: {
                        borderRadius: "8px",
                        height: "40px",
                        pl: "4px",
                        pr: "4px",
                      },
                    }}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field}
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
                Kategori*
              </Typography>
              <TextField
                select
                fullWidth
                value={selectedCategory}
                onChange={handleCategoryChange}
                InputProps={{
                  sx: {
                    borderRadius: "8px",
                    height: "40px",
                    pl: "4px",
                    pr: "4px",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  displayEmpty: true,
                }}
              >
                <MenuItem value="" disabled>
                  Pilih Label
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </TextField>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductForm;
