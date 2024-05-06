import { Box, Typography } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import React, { useState, useRef } from "react";

interface IFormImage {
  title: string;
}

const FormImage = ({ title }: IFormImage) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref for file input

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickIcon = () => {
    // Trigger click event on file input when icon is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box
      sx={{
        border: "1px dashed #b1b1b1",
        borderRadius: "8px",
        width: "130px",
        height: "130px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <label onClick={handleClickIcon}>
          <AddPhotoAlternateOutlinedIcon
            sx={{ color: "#909090", cursor: "pointer" }}
          />
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleImageUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <Typography
            sx={{ color: "#909090", fontWeight: 400, fontSize: "14px" }}
          >
            {title}
          </Typography>
        </label>
      )}
    </Box>
  );
};

export default FormImage;
