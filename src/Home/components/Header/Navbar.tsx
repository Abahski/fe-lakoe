  import { Box, Button, Typography } from "@mui/material";
  import {  useNavigate } from "react-router-dom";
  import { useAppDispatch, useAppSelector } from "../../../store";
  import { SET_LOGOUT } from "../../../store/slice/auth";

  const Navbar = () => {
    const navigate = useNavigate();
    const auth = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()

    return !auth.user ? (
      <Box
        position={"absolute"}
        height={100}
        px={4}
        color={"white"}
        width={"95%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        zIndex={50}
      >
        <Box>
          <Typography fontWeight={"bold"}>Material Tailwind React</Typography>
        </Box>
        <Box display={"flex"} gap={2}>
          <Typography
            fontWeight={"bold"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            Home 
          </Typography>
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
        </Box>
        <Box display={"flex"} gap={2} fontWeight={"bold"}>
          <Button 
            variant="contained" 
            sx={{ bgcolor: "grey" }}
            onClick={() => navigate("/login")}
            >
            Login
          </Button>
        </Box>
      </Box>
    ) : (
      <Box
        position={"absolute"}
        height={100}
        px={4}
        color={"white"}
        width={"95%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        zIndex={50}
      >
        <Box>
          <Typography fontWeight={"bold"}>Material Tailwind React</Typography>
        </Box>
        <Box display={"flex"} gap={2}>
           <Typography
             fontWeight={"bold"}
             sx={{ cursor: "pointer" }}
             onClick={() => navigate("/home")}
           >
             Home 
           </Typography>
           <Typography
             fontWeight={"bold"}
             sx={{ cursor: "pointer" }}
             onClick={() => navigate("/login")}
           >
             Profile 
           </Typography>
          <Typography
            fontWeight={"bold"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Username
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} fontWeight={"bold"}>
        
          <Button variant="contained" 
             sx={{ bgcolor: "grey", cursor: "pointer" }}
             onClick={() => {
               dispatch(SET_LOGOUT());
               navigate("/login");
             }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    );
  };

  export default Navbar;
