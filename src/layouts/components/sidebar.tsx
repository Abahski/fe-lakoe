import { Box, Collapse, ListItemText, Typography } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePentagon } from "react-icons/md";
import { IoMdCube } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import React, { useState } from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClic = () => {
    setIsClicked(true);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
      ml={4}
      pt={5}
      position={"fixed"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography display={"flex"} gap={1} sx={{ fontWeight: "500" }}>
          <MdOutlinePentagon size={20} />{" "}
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Dashboard
          </Link>
        </Typography>
        <Typography display={"flex"} gap={1} sx={{ fontWeight: "500" }}>
          <IoMdCube size={20} /> Produk
        </Typography>
        <Typography display={"flex"} gap={1} sx={{ fontWeight: "500" }}>
          <LiaShoppingBagSolid size={20} /> Pesanan
        </Typography>
        <Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            sx={{ fontWeight: "500" }}
            onClick={handleClick}
          >
            <Box>
              <IoSettingsOutline size={20} />
            </Box>
            <ListItemText primary="Pengaturan" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box component="div">
              <Link
                to="/setting/atur-toko"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "14px",
                  color: isClicked
                    ? "#0086b4"
                    : "gray" && isHovered
                    ? "#0086b4"
                    : "gray",
                  letterSpacing: "1px",
                  transition: "color 0.3s",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClic}
              >
                <Box>Atur Toko</Box>
              </Link>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "14px",
                  color: "gray",
                  letterSpacing: "1px",
                }}
              >
                <Box>Pengiriman</Box>
              </Link>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  fontSize: "14px",
                  color: "gray",
                  letterSpacing: "1px",
                }}
              >
                <Box>Metode Pembayaran</Box>
              </Link>
            </Box>
          </Collapse>
        </Typography>
      </Box>
      <Box pb={10}>
        <Typography display={"flex"} gap={1} sx={{ fontWeight: "500" }}>
          <RxAvatar size={20} /> Profile
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
