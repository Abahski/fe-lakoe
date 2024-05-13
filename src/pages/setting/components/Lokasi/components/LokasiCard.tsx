import { Box } from '@mui/material'
import React from 'react'
import ModalDelete from '../ModalDelete'
import ButtonTombolLEdit from '../ModalEdit'

const LokasiCard = ({ ...props }: any) => {
    return (
        <>
            {props.utama ?
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    border={"1px solid #DDDDDD"}
                    borderRadius={3}
                    p={2}
                    mb={1}
                >
                    <Box width={"25%"} fontSize={15}>
                        <Box>Nama Lokasi</Box>
                        <Box>Alamat</Box>
                        <Box>Kota / Kecamatan</Box>
                        <Box>Kode Pos</Box>
                        <Box>Pinpoint</Box>
                    </Box>
                    <Box width={"70%"} fontSize={13}>
                        <Box gap={1} display={"flex"}>
                            <Box fontWeight={"bold"} fontSize={14}>Fesyen Store</Box>
                            <Box bgcolor={"green"} px={2} borderRadius={1} color={"white"}>Alamat Utama</Box>
                        </Box>
                        <Box >
                            Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
                        </Box>
                        <Box >Kota Tangerang Selatan, Kec. Ciputat</Box>
                        <Box
                            display={"flex"}
                            gap={1}
                            alignItems={"center"}
                            fontSize={15}
                            color={props.PonPoint === "Belum" ? "grey" : "blue"}
                        >
                            {props.icon}
                            <Box>{props.PonPoint} Ponpoint</Box>
                        </Box>
                        <Box>Tes</Box>
                    </Box>
                    <Box width={"10%"}>
                        <Box
                            sx={{ cursor: "pointer", fontSize: 15, color: "gray" }}
                            display={"flex"}
                            gap={1}
                        >
                            <ModalDelete />
                            <ButtonTombolLEdit />
                        </Box>
                    </Box>
                </Box> : <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    border={"1px solid #DDDDDD"}
                    borderRadius={3}
                    p={2}
                    mb={1}
                >
                    <Box width={"25%"} fontSize={15}>
                        <Box>Nama Lokasi</Box>
                        <Box>Alamat</Box>
                        <Box>Kota / Kecamatan</Box>
                        <Box>Kode Pos</Box>
                        <Box>Pinpoint</Box>
                    </Box>
                    <Box width={"70%"} fontSize={13}>
                        <Box gap={1} display={"flex"}>
                            <Box fontWeight={"bold"} fontSize={14}>Fesyen Store</Box>
                        </Box>
                        <Box >
                            Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan
                        </Box>
                        <Box >Kota Tangerang Selatan, Kec. Ciputat</Box>
                        <Box
                            display={"flex"}
                            gap={1}
                            alignItems={"center"}
                            fontSize={15}
                            color={props.PonPoint === "Belum" ? "grey" : "blue"}
                        >
                            {props.icon}
                            <Box>{props.PonPoint} Ponpoint</Box>
                        </Box>
                        <Box>Tes</Box>
                    </Box>
                    <Box width={"10%"}>
                        <Box
                            sx={{ cursor: "pointer", fontSize: 15, color: "gray" }}
                            display={"flex"}
                            gap={1}
                        >
                            <ModalDelete />
                            <ButtonTombolLEdit />
                        </Box>
                    </Box>
                </Box>
            }
        </>

    )
}

export default LokasiCard