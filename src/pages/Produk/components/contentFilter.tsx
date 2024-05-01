import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'

const ContentFilter: React.FC<{}> = () => {
    // select option
    const categroies = [
        {
          value: 'Semua Kategori',
          label: 'Semua Kategori',
        },
    ];

    const filters = [
        {
            value: 'urutkan',
            label: 'urutkan',
        }
    ]
    // close select option
  return (
    <Box>
        <Box display={'flex'} gap={2}>
            <Box sx={{ padding: 4 }}>
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
            <Box sx={{ padding: 4, width: 200 }} mt={1}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Kategori"
                    defaultValue="EUR"
                    fullWidth
                    size='small'
                >
                {categroies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Box>
            <Box sx={{ padding: 4, width: 200 }} mt={1}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Urutkan"
                    defaultValue="EUR"
                    fullWidth
                    size='small'
                >
                {filters.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </Box>
        </Box>
    </Box>
  )
}

export default ContentFilter
