import { Box, Typography } from '@mui/material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import React from 'react'

interface IFormImage {
    title: string
}

const FormImage = ({ ...props }: IFormImage) => {
    return (
        <Box
            sx={{
                border: "1px solid",
                borderColor: "#b1b1b1",
                borderRadius: "8px",
                width: "130px",
                height: "130px",
                borderStyle: "dashed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <AddPhotoAlternateOutlinedIcon sx={{ color: "#909090" }} />
            <Typography sx={{ color: "#909090", fontWeight: 400, fontSize: "14px" }}>{props.title}</Typography>
        </Box>
    )
}

export default FormImage