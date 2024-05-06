import { Box } from '@mui/material'
import React from 'react'

const Count = ({ count }: any) => {
    return (
        <Box bgcolor={"#0086b4"} mr={1} display={"flex"} justifyContent={"center"} alignItems={"center"} fontSize={16} fontWeight={"semi-bold"} color={"white"} borderRadius={100} width={24} height={24}>
            {count}
        </Box>
    )
}

export default Count