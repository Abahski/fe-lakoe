import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MdArrowDropUp, MdArrowOutward } from "react-icons/md";

export default function Order() {
  return (
    <Card
      sx={{
        backgroundColor: "#262626",
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
          <Box fontWeight={"bold"} color={"#717171"} fontSize={20}>
            Total Order
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
          <Box fontWeight={"bold"} color={"white"}>
            40.251
          </Box>
          <Box color={"#54c229"} fontSize={15} mt={1}>
            <MdArrowDropUp /> 10%
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
