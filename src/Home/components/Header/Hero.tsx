import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Box position={"absolute"} zIndex={0} width={"98.5vw"} height={"100vh"}>
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </Box>
      <Box
        position={"absolute"}
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        zIndex={10}
        height={"100vh"}
        color={"white"}
      >
        
        <Typography fontWeight={"bold"} fontSize={50}>
          Your story starts with us.
        </Typography>
        <Typography fontSize={20} width={"70%"} textAlign={"center"}>
          This is a simple example of a Landing Page you can build using
          Material Tailwind. It features multiple components based on the
          Tailwind CSS and Material Design by Google.
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
