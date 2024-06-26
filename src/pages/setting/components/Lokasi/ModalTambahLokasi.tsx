import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useFetchDistricts from "../call/api";
import ModalMaps from "./modalMaps";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 700,

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

interface IFromLokasi {
  tambahLokasi: string;
  kecamatan: string;
  kodePos: number;
  alamatLengkap: string;
}

const FormSchema = yup.object({
  tambahLokasi: yup
    .string()
    .required("Tolong isi dulu ini ")
    .max(25, "Maksimal 25"),
  kecamatan: yup.string().required("Tolong isi dulu ini "),
  kodePos: yup.number().required("Tolong isi dulu ini "),
  alamatLengkap: yup.string().required("Tolong isi dulu ini "),
});

export default function ButtonTombolLokasi() {
  const { control, handleSubmit, reset } = useForm<IFromLokasi>({
    defaultValues: {
      tambahLokasi: "",
      kecamatan: "",
      kodePos: 0,
      alamatLengkap: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(FormSchema),
  });

  const handleOnSubmit: SubmitHandler<IFromLokasi> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleSubmitError: SubmitErrorHandler<IFromLokasi> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { districts } = useFetchDistricts(3202);
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredDistricts = districts.filter((district: any) =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Button
        sx={{
          border: "1px solid gray",
          borderRadius: "35px",
          boxSizing: "border-box",
          fontWeight: "bold",
          color: "black",
          fontSize: "12px",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onClick={handleOpen}
      >
        Tambah Lokasi
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} borderRadius={2} >
          <Typography
            sx={{ fontWeight: 700 }}

            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Tambah Lokasi Baru
          </Typography>
          <form
            action=""
            onSubmit={handleSubmit(handleOnSubmit, handleSubmitError)}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                Tambah Lokasi <span style={{ color: "red" }}>*</span>
              </label>
              <Controller
                control={control}
                name="tambahLokasi"
                render={({ field, fieldState }) => (
                  <TextField
                    type="text"
                    placeholder="Tambah Lokasi"
                    size="small"
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                Kecamatan <span style={{ color: "red" }}>*</span>
              </label>
              <Controller
                control={control}
                name="kecamatan"
                render={({ field, fieldState }) => (
                  <TextField
                    type="text"
                    placeholder="Cari wilayah..."
                    size="small"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e);
                      handleInputChange(e);
                    }}
                    value={searchTerm}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              {searchTerm.length > 0 && (
                <ul
                  style={{
                    padding: 0,
                    marginLeft: "20px",
                    fontSize: "10px",
                    color: "gray",
                  }}
                >
                  {filteredDistricts.map((district: any) => (
                    <li key={district.id}>{district.name}</li>
                  ))}
                </ul>
              )}
              <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                Kode Pos <span style={{ color: "red" }}>*</span>
              </label>
              <Controller
                control={control}
                name="kodePos"
                render={({ field, fieldState }) => (
                  <TextField
                    type="text"
                    placeholder="Kode Pos"
                    size="small"
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <label style={{ marginTop: "5px", marginBottom: "5px" }}>
                Alamat Lengkap <span style={{ color: "red" }}>*</span>
              </label>
              <Controller
                control={control}
                name="alamatLengkap"
                render={({ field, fieldState }) => (
                  <TextField
                    type="text"
                    placeholder="Alamat Lengkap"
                    size="small"
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Box>
            <Box ml={1}>
              <ModalMaps />
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} gap={"10px"}>
              <Button
                type="submit"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                  color: "black",
                  padding: "5px 15px",
                  boxSizing: "border-box",
                  borderRadius: "15px",
                }}
              >
                Batal
              </Button>
              <Button
                type="submit"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                  backgroundColor: "#1890ff",
                  color: "white",
                  padding: "5px 15px",
                  boxSizing: "border-box",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "#1890ff",
                  },
                }}
              >
                Simpan
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
