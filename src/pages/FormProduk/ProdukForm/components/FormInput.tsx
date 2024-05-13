import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

interface IFormProduk {
    title: string,
    placeholder: string
}

const FormInput = ({ ...props }: IFormProduk) => {

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    mb: 2,
                }}
            >
                <Box display={"flex"}>
                    <Typography
                        sx={{
                            fontWeight: "500",
                            fontSize: "14px",
                            pl: "4px",
                            pr: "4px",
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography color={"red"}>*</Typography>
                </Box>
                <TextField
                    fullWidth
                    placeholder={props.placeholder}
                    InputProps={{
                        sx: {
                            borderRadius: "8px",
                            height: "40px",
                            pl: "4px",
                            pr: "4px",
                        },
                    }}
                />
            </Box>
        </>
    )

}

export default FormInput