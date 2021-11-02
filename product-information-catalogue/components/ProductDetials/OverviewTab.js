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
import Overview from "./Overview";
import Channels from "./Channels";
import Varients from "./Varients";


//components

function OverviewTab() {
  const theme = useTheme();
  const [currentNavigation, setCurrentNavigation] = useState(" Overview");

  return (
    <Box sx={{  mr: "1.5rem", ml: "5.5rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "1.5rem",
        }}
      >
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation(" Overview");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "2.5rem",
              fontWeight: currentNavigation === " Overview" ? "bold" : null,
              // paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === " Overview" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
            Overview
          </Typography>
        </Box>

        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Common information");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Common information" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom: currentNavigation === "Common information" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
            Common information
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Varients");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Varients" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Varients" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
            Varients
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Associations");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Associations" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Associations" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
            Associations
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation(" Internal info");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === " Internal info" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === " Internal info" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
           Internal info
          </Typography>
        </Box>
        <Box>
          <Typography
            onClick={() => {
              setCurrentNavigation("Activity");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".75rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Activity" ? "bold" : null,
              paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Activity" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
           Activity
          </Typography>
        </Box>
      </Box>
      <Divider />

      {currentNavigation === " Overview" ? (
        <>
          <Overview/>
        </>
      ) : null}

      {currentNavigation === "Common information" ? <>Common information</> : null}
      {currentNavigation === "Varients" ? <><Varients/></> : null}
      {currentNavigation === "Associations" ? <>Associations</> : null}
      {currentNavigation === " Internal info" ? <> Internal info</> : null}
      {currentNavigation === "Activity" ? <>Activity</> : null}
    </Box>
  );
}

export default OverviewTab;
