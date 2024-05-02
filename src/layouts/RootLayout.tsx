import { Box } from "@mui/material";
import Sidebar from "./components/sidebar";
import SideContent from "./components/sideContent";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }} gap={2}>
        <Box flex={1} height={"100vh"} bgcolor={"#ffffff"}>
          <Sidebar />
        </Box>
        <Box
          flex={3.5}
          sx={{
            overflowY: "auto",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          my={1}
        >
          <Outlet />
        </Box>
        <Box flex={1.5} bgcolor={"#ffffff"}>
          <SideContent />
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
