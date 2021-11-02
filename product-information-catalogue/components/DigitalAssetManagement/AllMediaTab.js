//react
import React, { useState } from "react";

//material ui
import {
  ToggleButton,
  Typography,
  Button,
  Grid,
  Divider,
  Paper,
  Container,
  Card,
} from "@mui/material";
import { Box, color } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import DigitalAssetManagementSearchbar from "./DigitalAssetManagementSearchbar";
import Sortby from "./Sortby";
import ProductsList from "./ProductsList";
import AllProductDetials from "./AllProductDetials";

//components

function AllMediaTab() {
  const theme = useTheme();
  const [currentNavigation, setCurrentNavigation] = useState("All media");

  return (
    <Box sx={{ mt: "1rem", mr: "1.5rem", ml: "5.5rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "2.5rem",
        }}
      >
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("All media");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === "All media" ? "bold" : null,
              // paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "All media"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            All media
          </Typography>
        </Box>

        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Images");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Images" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Images"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            Images
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Videos");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Videos" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Videos"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            Videos
          </Typography>
        </Box>
      </Box>
      <Divider />

      {currentNavigation === "All media" ? (
        <>
          <DigitalAssetManagementSearchbar />
          <Sortby />
          {/* <ProductsList/> */}
          <Divider sx={{ mb: "1rem" }} />
          <AllProductDetials />
        </>
      ) : null}

      {currentNavigation === "Images" ? <>Images</> : null}
      {currentNavigation === "Videos" ? <>Videos</> : null}
    </Box>
  );
}

export default AllMediaTab;
