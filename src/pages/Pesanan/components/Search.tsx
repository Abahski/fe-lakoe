import * as React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { Box } from '@mui/material';

const Search = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <ContentPasteSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Cari Pesanan" size='small' variant="standard" />
            </Box>
        </Box>
    )
}

export default Search