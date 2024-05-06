import { Box, Collapse, ListItemText, Typography } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePentagon } from "react-icons/md";
import { IoMdCube } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Side = [
  {
    icon: <MdOutlinePentagon size={20} />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <IoMdCube size={20} />,
    title: "Produk",
    link: "/produk",
  },
  {
    icon: <LiaShoppingBagSolid size={20} />,
    title: "Pesanan",
    link: "/pesanan",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
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
      position={"fixed"}
      height={"90vh"}
      py={4}
      pl={4}
    >
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {Side.map((item, index) => (
          <Link to={item.link} key={index} style={{ textDecoration: "none", color: "black" }}>
            <Typography display={"flex"} gap={1} sx={{ fontWeight: "500" }}>
              {item.icon} {item.title}
            </Typography>
          </Link>
        ))}

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
            <Typography variant="body1" component="span">Pengaturan</Typography>
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
                  color: isClicked ? "#0086b4" : (isHovered ? "#0086b4" : "gray"),
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
      <Box>
        <Link to={"/profile"} style={{ textDecoration: "none", color: "black" }}>
          <Typography display={"flex"} gap={1} sx={{ fontWeight: "500" }}>
            <RxAvatar size={20} /> Profile
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
