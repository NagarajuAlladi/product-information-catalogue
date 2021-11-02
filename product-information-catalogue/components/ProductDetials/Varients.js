import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TreeItem, TreeView } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import GeneralInformation from "./GeneralInformation";
import ProductPhotos from "./ProductPhotos";
import VarientAttribute from "./VarientAttribute";
import SEO from "./SEO";
import VarientSizes from "./VarientSizes";

function Varients() {
  // const [currentNavigation, setCurrentNavigation] = useState(
  //   "General Information"
  // );
  const [brand, setBrand] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [complete, setComplete] = React.useState("");

  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangeCountry = (eventCountry) => {
    setCountry(eventCountry.target.value);
  };
  const handleChangeComplete = (eventComplete) => {
    setCountry(eventComplete.target.value);
  };
  const theme = useTheme();
  return (
    <Box sx={{ mt: "1rem" }}>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Box>
            <Box>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                displayEmpty
                value={brand}
                onChange={handleChangeBrand}
                sx={{ width: "13rem", height: "3rem" }}
              >
                <MenuItem disabled value="">
                  Cubus-online
                </MenuItem>
                <MenuItem value={10}>Filter</MenuItem>
                <MenuItem value={20}>Filter</MenuItem>
                <MenuItem value={30}>Filter</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mt: "1rem" }}>
              <TreeView>
                <TreeItem nodeId="1" label="312 / DarkBlue">
                  <TreeItem
                    nodeId="2"
                    label="General Information"
                    // onClick={() => {
                    //   setCurrentNavigation("General Information");
                    // }}
                  />
                  <TreeItem
                    nodeId="3"
                    label="Product Photos"
                    // onClick={() => {
                    //   setCurrentNavigation("Product Photos");
                    // }}
                  />
                  <TreeItem
                    nodeId="4"
                    label="Varient Attributes"
                    // onClick={() => {
                    //   setCurrentNavigation("Varient Attributes");
                    // }}
                  />
                  <TreeItem
                    nodeId="5"
                    label="SEO"
                    // onClick={() => {
                    //   setCurrentNavigation("SEO");
                    // }}
                  />
                  <TreeItem
                    nodeId="6"
                    label="Varient Sizes"
                    // onClick={() => {
                    //   setCurrentNavigation("Varient Sizes");
                    // }}
                  />
                  <TreeItem
                    nodeId="7"
                    label="Status & Publishing"
                    // onClick={() => {
                    //   setCurrentNavigation("Status & Publishing");
                    // }}
                  />
                </TreeItem>
                <Divider />
                <TreeItem nodeId="8" label="209 / Off White" />
                <Divider />
                <TreeItem nodeId="9" label="200 / Black" />
              </TreeView>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                displayEmpty
                value={country}
                onChange={handleChangeCountry}
                sx={{ width: "13rem", height: "3rem", mr: "0.5rem" }}
              >
                <MenuItem value="">Norge/NOK</MenuItem>
                <MenuItem value={10}>Filter</MenuItem>
                <MenuItem value={20}>Filter</MenuItem>
                <MenuItem value={30}>Filter</MenuItem>
              </Select>
            </Box>

            <Box>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                displayEmpty
                value={complete}
                onChange={handleChangeComplete}
                sx={{ width: "13rem", height: "3rem" }}
              >
                <MenuItem value="">80% complete</MenuItem>
                <MenuItem value={20}>Filter</MenuItem>
                <MenuItem value={30}>Filter</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box sx={{ mt: "1rem" }}>
            {/* {currentNavigation === "General Information" ? (
              <><GeneralInformation/></>
            ) : null}
            {currentNavigation === "Product Photos" ? (
              <>Product Photos</>
            ) : null}
            {currentNavigation === "Varient Attributes" ? (
              <>Varient Attributes</>
            ) : null}
            {currentNavigation === "SEO" ? <>SEO</> : null}
            {currentNavigation === "Varient Sizes" ? <>Varient Sizes</> : null}
            {currentNavigation === "Status & Publishing" ? (
              <>Status & Publishing</>
            ) : null} */}
            <GeneralInformation />
            <Divider sx={{ mt: "2rem" }} />
            <ProductPhotos />
            <Divider sx={{ mt: "2rem" }} />
            <VarientAttribute />
            <Divider sx={{ mt: "2rem" }} />
            <SEO />
            <Divider sx={{ mt: "2rem" }} />
            <VarientSizes />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="small"
            sx={{
              width: "auto",
              backgroundColor:theme.palette.secondary.main,
              ml: "2rem",
              ":hover": {
                backgroundColor: "secondary.main",
                color: "white",
              },
            }}
          >
            Preview
          </Button>
          <Box
            sx={{
              height: "15rem",
              backgroundColor: theme.palette.secondary.main,
              ml: "2rem",
              mt: "1rem",
            }}
          >
            Hello
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Varients;
