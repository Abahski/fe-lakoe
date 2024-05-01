import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Kurir = [
    { title: "GoSend" },
    { title: "GrabExpress" },
    { title: "AnterAja" },
    { title: "JNE" },
    { title: "J&T" },
    { title: "Lion Parcel" },
    { title: "Ninja Express" },
    { title: "Pos Indonesia" },
];

const ButtonCheckKurir = () => {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={Kurir}
            disableCloseOnSelect
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
            style={{ width: 400 }}
            renderInput={(params) => (
                <TextField {...params} label="Kurir" placeholder="Silahkan Pilih Kurir" />
            )}
        />
    )
}

export default ButtonCheckKurir