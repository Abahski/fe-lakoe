import {
  Box,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductWeightValidation, {
  IProductWeightForm,
} from "../../../lib/hooks/validation/useProductWeightValidation";

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
  const { reset, control, handleSubmit } = useProductWeightValidation();

  const SubmitHandler: SubmitHandler<IProductWeightForm> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handeSubmitError: SubmitErrorHandler<IProductWeightForm> = (errors) => {
    alert("error" + JSON.stringify(errors, null, 2));
  };

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
                  width: "100%",
                }}
              >
                Berat Produk*
              </Typography>
              <Controller
                control={control}
                name="weight"
                render={({ field, fieldState }) => (
                  <ProductWeightField
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
                <form
                  style={{ width: "33%" }}
                  onSubmit={handleSubmit(SubmitHandler, handeSubmitError)}
                >
                  <Controller
                    control={control}
                    name="long"
                    render={({ field, fieldState }) => (
                      <ProductMeasureField
                        fullWidth
                        placeholder="Panjang"
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
                </form>
                <form
                  style={{ width: "33%" }}
                  onSubmit={handleSubmit(SubmitHandler, handeSubmitError)}
                >
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
                    <Controller
                      control={control}
                      name="width"
                      render={({ field, fieldState }) => (
                        <ProductMeasureField
                          fullWidth
                          placeholder="Lebar"
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
                  </Box>a
                </form>
                <form
                  style={{ width: "33%" }}
                  onSubmit={handleSubmit(SubmitHandler, handeSubmitError)}
                >
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
                    <Controller
                      control={control}
                      name="height"
                      render={({ field, fieldState }) => (
                        <ProductMeasureField
                          fullWidth
                          placeholder="Tinggi"
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
        </Box>
      </Box>
    </Box>
  );
};

export default WeightShippingProduct;
