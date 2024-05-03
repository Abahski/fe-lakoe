import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'
import Search from '../../Pesanan/components/Search';

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
        <Box display={'flex'} alignItems={"center"} gap={2} py={1} px={2} justifyContent={"space-between"}>
            <Box>
                <Search />
            </Box>
            <Box width={300}>
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
            <Box width={200}>
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
        {/* End urutan */}
    </Box>
  );
};

export default ContentFilter;
