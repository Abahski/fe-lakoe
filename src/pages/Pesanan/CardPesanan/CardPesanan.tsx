import * as React from "react";
import StatusPesanan from "./components/StatusPesanan";
import DetailBarang from "./components/DetailBarang";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardPesanan = ({ side }: any) => {
  return (
    <>
      {
        side === 0 ? (
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Link
              to={"/pesanan/detailorder/belumdibayar"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Belum Dibayar"}
                  tracking={"Hubungi Pembeli"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
            <Link
              to={"/pesanan/detailorder/pesananbaru"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Pesanan Baru"}
                  tracking={"Proses Pesanan"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
            <Link
              to={"/pesanan/detailorder/pesananbaru"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Pesanan Baru"}
                  tracking={"Proses Pesanan"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
            <Link
              to={"/pesanan/detailorder/siapdikirim"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Siap Dikirim"}
                  tracking={"Kabari Pembeli"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
            <Link
              to={"/pesanan/detailorder/dalampengiriman"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Dalam Pengiriman"}
                  tracking={"Lihat Rincian Pengiriman"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
            <Link
              to={"/pesanan/detailorder/pesananselesai"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Pesanan Selesai"}
                  tracking={"Hubungi Pembeli"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
            <Link
              to={"/pesanan/detailorder/dibatalkan"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box borderRadius={2} border={"1px solid grey"} p={1}>
                <StatusPesanan
                  NoResi={"INV/20230809/MPL/00000239"}
                  StatusPesanan={"Dibatalkan"}
                  tracking={"Hubungi Pembeli"}
                />
                <DetailBarang
                  namaBarang={
                    "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                  }
                  jumlahBarang={"5"}
                  nominalBelanja={"190.000"}
                />
              </Box>
            </Link>
          </Box>
        ) : side === 1 ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Link
                to={"/pesanan/detailorder/belumdibayar"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Belum Dibayar"}
                    tracking={"Hubungi Pembeli"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
            </Box>
          </>
        ) : side === 2 ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Link
                to={"/pesanan/detailorder/pesananbaru"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Pesanan Baru"}
                    tracking={"Proses Pesanan"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
              <Link
                to={"/pesanan/detailorder/pesananbaru"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Pesanan Baru"}
                    tracking={"Proses Pesanan"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
            </Box>
          </>
        ) : side === 3 ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Link
                to={"/pesanan/detailorder/siapdikirim"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Siap Dikirim"}
                    tracking={"Kabari Pembeli"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
            </Box>
          </>
        ) : side === 4 ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Link
                to={"/pesanan/detailorder/dalampengiriman"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Dalam Pengiriman"}
                    tracking={"Lihat Rincian Pengiriman"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
            </Box>
          </>
        ) : side === 5 ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Link
                to={"/pesanan/detailorder/pesananselesai"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Pesanan Selesai"}
                    tracking={"Hubungi Pembeli"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
            </Box>
          </>
        ) : side === 6 ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Link
                to={"/pesanan/detailorder/dibatalkan"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box borderRadius={2} border={"1px solid grey"} p={1}>
                  <StatusPesanan
                    NoResi={"INV/20230809/MPL/00000239"}
                    StatusPesanan={"Dibatalkan"}
                    tracking={"Hubungi Pembeli"}
                  />
                  <DetailBarang
                    namaBarang={
                      "CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"
                    }
                    jumlahBarang={"5"}
                    nominalBelanja={"190.000"}
                  />
                </Box>
              </Link>
            </Box>
          </>
        ) : (
          ""
        )
        // : side === 6 ?
        // <>

        // </>
      }
      {/* <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Belum Dibayar"} tracking={"Hubungi Pembeli"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Pesanan Baru"} tracking={"Proses Pesanan"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Pesanan Baru"} tracking={"Proses Pesanan"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Siap Dikirim"} tracking={"Kabari Pembeli"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Dalam Pengiriman"} tracking={"Lihat Rincian Pengiriman"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Pesanan Selesai"} tracking={"Hubungi Pembeli"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
                <Box borderRadius={2} border={'1px solid grey'} p={1}>
                    <StatusPesanan NoResi={"INV/20230809/MPL/00000239"} StatusPesanan={"Dibatalkan"} tracking={"Hubungi Pembeli"} />
                    <DetailBarang namaBarang={"CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S"} jumlahBarang={"5"} nominalBelanja={"190.000"} />
                </Box>
            </Box> */}
    </>
  );
};

export default CardPesanan;
