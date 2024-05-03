import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Urutkan = [
    { title: "Paling Baru" },
    { title: "Paling Lama" },
    { title: "Respons Tercepat" },
    { title: "Respons Terlama" },
];

const ButtonCheckUrutkan = () => {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={Urutkan}
            disableCloseOnSelect
            size='small'
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: 220 }}
            renderInput={(params) => (
                <TextField {...params} label="Urutkan" placeholder="Kategori" />
            )}
        />
    )
}

export default ButtonCheckUrutkan