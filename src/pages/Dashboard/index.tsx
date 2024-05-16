import Box from "@mui/material/Box";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Summary from "./summary/summary";

const Dashboard = () => {
  return (
    <>
      <Box p={2} sx={{ backgroundColor: "white", borderRadius: 3 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            fontWeight={"bold"}
            sx={{ fontFamily: "poppins" }}
            fontSize={35}
            ml={2}
            color={"#54c229"}
          >
            Dashboard
          </Box>
          <Box fontSize={23} mr={2} display={"flex"} gap={2}>
            <IoIosNotificationsOutline />
            <CgProfile />
          </Box>
        </Box>
        <Box>
          <Summary />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
