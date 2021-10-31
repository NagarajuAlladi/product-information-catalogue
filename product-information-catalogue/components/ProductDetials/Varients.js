import { Button, Divider, Grid, Typography } from "@mui/material";
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
  const theme = useTheme();
  return (
    <Box sx={{ mt: "1rem" }}>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Box>
            <Box
              sx={{
                border: "1px solid gray",
                width: "auto",
                height: "3rem",
                display: "flex",
                p: "0.1rem 0.5rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="">Cubus-online</Typography>
              <ArrowDropDownTwoToneIcon />
            </Box>
            <Box sx={{ mt: "1rem" }}>
              <TreeView>
                <TreeItem nodeId="1" label="312 / DarkBlue" >
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
            <Box
              sx={{
                border: "1px solid gray",
                width: "12rem",
                height: "3rem",
                display: "flex",
                p: "0.1rem 0.5rem",
                justifyContent: "space-between",
                alignItems: "center",
                mr: "1rem",
              }}
            >
              <Typography variant="">Norge/NOK</Typography>
              <ArrowDropDownTwoToneIcon />
            </Box>
            <Box
              sx={{
                border: "1px solid gray",
                width: "12rem",
                height: "3rem",
                display: "flex",
                p: "0.1rem 0.5rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="">80%Complete</Typography>
              <MoreVertIcon fontSize="small" />
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
            <GeneralInformation/>
            <Divider sx={{mt:'2rem'}} />
            <ProductPhotos/>
            <Divider sx={{mt:'2rem'}} />
            <VarientAttribute/>
            <Divider sx={{mt:'2rem'}} />
            <SEO/>
            <Divider sx={{mt:'2rem'}} />
            <VarientSizes/>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "auto", ml: "2rem", }}
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
