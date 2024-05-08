import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      position={"absolute"}
      height={100}
      px={4}
      color={"white"}
      width={"95%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      zIndex={10}
    >
      <Box>
        <Typography fontWeight={"bold"}>Material Tailwind React</Typography>
      </Box>
      <Box display={"flex"} gap={2}>
        <Typography
          fontWeight={"bold"}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/homepage")}
        >
          Home
        </Typography>
        <Typography fontWeight={"bold"}>Profile</Typography>
        <Typography
          fontWeight={"bold"}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </Typography>
        <Typography
          fontWeight={"bold"}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </Typography>
        <Typography fontWeight={"bold"}>Docs</Typography>
      </Box>
      <Box display={"flex"} gap={2} fontWeight={"bold"}>
        <Button variant="text" sx={{ color: "white" }}>
          Pro Version
        </Button>
        <Button variant="contained" sx={{ bgcolor: "grey" }}>
          Free Download
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
