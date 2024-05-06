import { Box, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box width={"100vw"} height={250} display={'flex'} justifyContent={"space-between"} flexDirection={"column"}>
            <Box display={"flex"} height={200} alignItems={"center"} justifyContent={"space-around"} gap={20} borderBottom={1}>
                <Box display={"flex"} flexDirection={"column"} gap={2}>
                    <Typography variant="h4" color="initial">
                        Material Tailwind
                    </Typography>
                    <Typography>
                        Easy to use React components for Tailwind CSS and Material Design.
                    </Typography>
                </Box>
                <Box display={"flex"} flexWrap={"wrap"} gap={2}>
                    <Box maxWidth={200}>
                        <Typography variant="caption" color="initial">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus ratione ipsam praesentium et voluptatum.
                        </Typography>
                    </Box>
                    <Box maxWidth={200}>
                        <Typography variant="caption" color="initial">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus ratione ipsam praesentium et voluptatum.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="caption" color="initial">
                    Copyright © 2024 Material Tailwind by Creative Tim.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
