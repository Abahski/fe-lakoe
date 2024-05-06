import {
  Avatar,
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import LeastStock from "./leastStock";
import React from "react";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const RecentOrder = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Box
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box fontWeight={"bold"} fontSize={20} sx={{ fontFamily: "poppins" }}>
          Recent Order
        </Box>
        <Box display={"flex"} gap={4} alignItems={"center"}>
          <Box fontWeight={"bold"} fontSize={15} sx={{ fontFamily: "poppins" }}>
            View All
          </Box>
          <Box fontWeight={"bold"} fontSize={20} sx={{ fontFamily: "poppins" }}>
            Stock Report
          </Box>
          <Box>
            <LeastStock />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={2}
        mt={3}
        alignItems={"center"}
        sx={{
          fontFamily: "poppins",
          "&:hover": {
            backgroundColor: "#262626",
            color: "white",
            transition: "0.5s",
            borderRadius: "10px",
          },
        }}
        fontSize={13}
        color={"gray/50"}
        p={1}
      >
        <Box>
          <Avatar
            alt="Travis Howard"
            src="https://plus.unsplash.com/premium_photo-1694618623649-51733e6001fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box>Bung Roy</Box>
        <Box>INV-MC1120</Box>
        <Box>March 12,2024</Box>

        <Box>$25.000</Box>
        <Box>Skeleteon T-Shirt</Box>
        <Box sx={{ width: "20%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
        <Box>96</Box>
      </Box>
      <Box
        display={"flex"}
        gap={2}
        alignItems={"center"}
        sx={{
          fontFamily: "poppins",
          "&:hover": {
            backgroundColor: "#262626",
            color: "white",
            transition: "0.5s",
            borderRadius: "10px",
          },
        }}
        fontSize={13}
        color={"gray/50"}
        p={1}
      >
        <Box>
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1714640816845-90e04e414f6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box>Bung Roy</Box>
        <Box>INV-MC1120</Box>
        <Box>March 12,2024</Box>

        <Box>$25.000</Box>
        <Box>Skeleteon T-Shirt</Box>
        <Box sx={{ width: "20%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
        <Box>96</Box>
      </Box>
    </>
  );
};

export default RecentOrder;
