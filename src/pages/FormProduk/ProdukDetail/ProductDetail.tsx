import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useProductDescriptionValidation, {
  IProductDetailFormValues,
} from "../../../lib/hooks/validation/useProductDescriptionValidation";
import FormImage from "./components/FormImage";

const ProductDetail = () => {
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(new Array(5).fill(null));
  const { reset, control, handleSubmit } = useProductDescriptionValidation();

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const SubmitHandler: SubmitHandler<IProductDetailFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const handeSubmitError: SubmitErrorHandler<IProductDetailFormValues> = (
    errors
  ) => {
    alert("error" + JSON.stringify(errors, null, 2));
  };

  const handleImageUpload = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newImagePreview = [...imagePreview];
      newImagePreview[index] = reader.result;
      setImagePreview(newImagePreview);
    };

    if (files) {
      reader.readAsDataURL(files);
    }
  };


  return (
    <Box
      sx={{
        height: "524.4px",
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
          Detail Produk
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
              alignItems: "flex-start",
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
              Deskripsi
            </Typography>
            <Controller
              control={control}
              name="description"
              render={({ field, fieldState }) => (
                <TextField
                  multiline
                  rows={8}
                  fullWidth
                  placeholder="Masukkan deskripsi lengkap produk kamu"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  {...field}
                  InputProps={{
                    sx: {
                      borderRadius: "8px",
                      height: "200px",
                      pl: "4px",
                      pr: "4px",
                      alignSelf: "flex-start",
                    },
                    inputProps: {
                      maxLength: 3000,
                    },

                    value: description,
                    onChange: handleDescriptionChange,
                  }}
                />
              )}
            />
            <Typography
              sx={{
                fontSize: "12px",
                color: "text.secondary",
                alignSelf: "flex-end",
              }}
            >
              {`${description.length}/3000 `}
            </Typography>
          </Box>
        </form>
        <Box sx={{ height: "197px" }}>
          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                pl: "4px",
                pr: "4px",
              }}
            >
              Foto Produk
            </Typography>
          </Box>
          <Box
            sx={{
              height: "150px",
              gap: 1,
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormImage title="Foto Utama" />
            <FormImage title="Foto 2" />
            <FormImage title="Foto 3" />
            <FormImage title="Foto 4" />
            <FormImage title="Foto 5" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
