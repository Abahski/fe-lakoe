import {
  Box,
  Button,
  FormLabel,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { TbPhotoDown } from "react-icons/tb";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

interface IFrom {
  slogan: string;
  namaToko: string;
  description: string;
  image: string;
}

const FormSchema = yup.object({
  slogan: yup.string().required("Tolong isi dulu ini ").max(25, "Maksimal 25"),
  namaToko: yup
    .string()
    .required("Tolong isi dulu ini ")
    .max(10, "Maksimal 10"),
  description: yup
    .string()
    .required("Tolong isi dulu ini ")
    .max(100, "Maksimal 100"),
  image: yup.string().required("Tolong masukin dulu image nya"),
});
const InformasiToko = () => {
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [nama_Toko, setNamaToko] = useState(0);
  const [Slogan, setSlogan] = useState(0);
  const [img, setImg] = useState("");
  const { control, handleSubmit, reset } = useForm<IFrom>({
    defaultValues: {
      slogan: "",
      namaToko: "",
      description: "",
      image: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(FormSchema),
  });

  const handleOnSubmit: SubmitHandler<IFrom> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleSubmiError: SubmitErrorHandler<IFrom> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionLength(event.target.value.length);
  };

  const handleNamaTokoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNamaToko(event.target.value.length);
  };
  const handleSloganChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlogan(event.target.value.length);
  };

  const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Box fontWeight={"bold"} sx={{ fontFamily: "poppins" }}>
        Informasi Toko
      </Box>
      <form action="" onSubmit={handleSubmit(handleOnSubmit, handleSubmiError)}>
        <Box display={"flex"} gap={2}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
            width={"50%"}
          >
            <Box width={"100%"} mt={3} position={"relative"}>
              <Controller
                control={control}
                name="namaToko"
                render={({ field, fieldState }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-search"
                    label="Nama Toko"
                    type="Nama Toko"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e);
                      handleNamaTokoChange(e);
                    }}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Typography variant="body2" color="textSecondary">
                {nama_Toko}/10
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Controller
                control={control}
                name="slogan"
                render={({ field, fieldState }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-search"
                    label="Slogan"
                    type="Slogan"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e);
                      handleSloganChange(e);
                    }}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Typography variant="body2" color="textSecondary">
                {Slogan}/25
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} width={"50%"} mt={3}>
            <Box width={"100%"}>
              <Controller
                control={control}
                name="description"
                render={({ field, fieldState }) => (
                  <TextField
                    sx={{ width: "100%" }}
                    rows={5}
                    id="outlined-search"
                    label="Deskripsi"
                    type="Diskripsi"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e);
                      handleDescriptionChange(e);
                    }}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Typography variant="body2" color="textSecondary">
                {descriptionLength}/100
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              my: 1,
              fontWeight: "bold",
              backgroundColor: "#1890ff",
              color: "white",
              padding: "5px 15px",
              boxSizing: "border-box",
              borderRadius: "15px",
            }}
          >
            Simpan
          </Button>
        </Box>
        <hr style={{ color: "#DDDDDD" }} />
        <Box>
          <FormLabel sx={{ fontWeight: "bold" }}>Logo Toko</FormLabel>
          <Box display="flex" alignItems="center" mt={1}>
            <Input
              type="file"
              inputProps={{ accept: "image/*" }}
              sx={{
                display: "none",
              }}
              id="fileInput"
              onChange={handleImgChange}
            />
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              <Box
                width={100}
                height={100}
                border="2px dashed #ccc"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                {img ? (
                  <img
                    src={img}
                    alt="Selected Image"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                ) : (
                  <>
                    <Box fontSize={25}>
                      <TbPhotoDown />
                    </Box>
                    <Typography fontSize={12} mt={1}>
                      Upload Logo
                    </Typography>
                  </>
                )}
              </Box>
            </label>
          </Box>
          <Box fontSize={12} color={"gray"} mt={1}>
            Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10
            Megabytes. Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
          </Box>
        </Box>
      </form>
    </>
  );
};

export default InformasiToko;
