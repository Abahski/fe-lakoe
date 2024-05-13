import { Box } from "@mui/material";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InformasiToko from "./components/InformasiToko/InformasiToko";
import Lokasi from "./components/Lokasi/Lokasi";
import TemplatePesan from "./components/Template/TemplatePesan";

const FesyenStore = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "white", borderRadius: 3 }}>
        <Box
          fontWeight={"bold"}
          sx={{ fontFamily: "poppins" }}
          fontSize={20}
          ml={2}
          pt={2}
        >
          Fesyen Store
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{ fontWeight: "bold" }} label="Informasi" value="1" />
              <Tab sx={{ fontWeight: "bold" }} label="Lokasi" value="2" />
              <Tab
                sx={{ fontWeight: "bold" }}
                label="Template Pesan"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">{value === "1" && <InformasiToko />}</TabPanel>
          <TabPanel value="2">{value === "2" && <Lokasi />}</TabPanel>
          <TabPanel value="3">{value === "3" && <TemplatePesan />}</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default FesyenStore;
