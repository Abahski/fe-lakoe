import { Box, Card, CardContent, Typography } from "@mui/material";
import { MdArrowDropUp, MdArrowOutward } from "react-icons/md";

const Sold = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: "10px",
          width: "220px",
          transition: "transform 0.3s",
          "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
            color="text.secondary"
            gutterBottom
          >
            <Box fontWeight={"bold"} color={"black"} fontSize={20}>
              Product Sold
            </Box>
            <Box color={"#717171"} fontSize={20}>
              <MdArrowOutward />
            </Box>
          </Typography>
          <hr style={{ color: "#717171", width: "98%" }} />
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            variant="h5"
            component="div"
          >
            <Box fontWeight={"bold"} color={"black"}>
              40.251
            </Box>
            <Box color={"#54c229"} fontSize={15} mt={1}>
              <MdArrowDropUp /> 10%
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Sold;
