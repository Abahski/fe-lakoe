import React from 'react';
import { Box, Checkbox, FormControl, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names1 = [
  'Audio, Kamera & Elektron ',
  'Buku',
  'Dapur',
  'Fashion Anak & Bayi',
  'Fashion Muslim',
  'Fashion Pria',
  'Fashion Wanita',
];

const names2 = [
    'Terakhir diubah',
    'Terlaris',
    'Kurang diminati',
    'Harga tertinggi',
    'Harga terendah',
    'Stok terbanyak',
    'Stok tersedikit'
];

const ContentFilter: React.FC<{}> = () => {
  const [personName1, setPersonName1] = React.useState<string[]>([]);
  const [personName2, setPersonName2] = React.useState<string[]>([]);

  const handleChange1 = (event: SelectChangeEvent<string[]>) => {
    setPersonName1(event.target.value as string[]);
  };
  const handleChange2 = (event: SelectChangeEvent<string[]>) => {
    setPersonName2(event.target.value as string[]);
  };

  return (
    <Box display={'flex'} width={"100%"} gap={2} justifyContent={"center"} p={2}>
        {/* Input */}
        <Box>
          <TextField
            id="standard-number"
            label="Cari produk"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
        </Box>
        {/* Select One */}
        <Box  mt={1}>
          <FormControl sx={{ m: 1, width:200}}>
                <Select
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName1}
                    size='small'
                    onChange={handleChange1}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                {names1.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={personName1.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
          </FormControl>
        </Box>
        {/* Urutan */}
        <Box  mt={1}>
          <FormControl sx={{ m: 1, width:200}}>
                <Select
                    id="demo-multiple-checkbox"
                    value={personName2}
                    size='small'
                    color='primary'
                    onChange={handleChange2}
                    MenuProps={MenuProps}
                >
                  {names2.map((name) => (
                    <MenuItem key={name} value={name}>
                        <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>
        </Box>
        {/* End urutan */}
    </Box>
  );
};

export default ContentFilter;
