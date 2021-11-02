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
import Searchbar from "./Searchbar";
import ChipsArray from "./Chips";
import StylesTab from "./StylesTab";

//components

function Products() {
  const theme = useTheme();
  const [currentNavigation, setCurrentNavigation] = useState("All Products");

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
              setCurrentNavigation("All Products");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === "All Products" ? "bold" : null,
              // paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "All Products"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            All Products
          </Typography>
        </Box>

        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Draft");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === "Draft" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Draft"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            Draft
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Coming Soon");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === "Coming Soon" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Coming Soon"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            Coming Soon
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Published");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === "Published" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Published"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            Published
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("On hold");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === "On hold" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "On hold"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            On hold
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation(" Archived");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2rem",
              fontWeight: currentNavigation === " Archived" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === " Archived"
                  ? "2px solid hsla(161, 100%, 37%, 1)"
                  : null,
            }}
          >
            Archived
          </Typography>
        </Box>
      </Box>
      <Divider />

      {currentNavigation === "All Products" ? (
        <>
          <Searchbar />
          <ChipsArray />
          <StylesTab />
        </>
      ) : null}

      {currentNavigation === "Draft" ? <>Draft </> : null}
      {currentNavigation === "Coming Soon" ? <>Coming Soon</> : null}
      {currentNavigation === "Published" ? <>Published</> : null}
      {currentNavigation === "On hold" ? <>On hold</> : null}
      {currentNavigation === " Archived" ? <> Archived</> : null}
    </Box>
  );
}

export default Products;
