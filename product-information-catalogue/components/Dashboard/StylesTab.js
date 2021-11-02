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
import StylesTable from "./StylesTable";

//components

function StylesTab() {
  const theme = useTheme();
  const [currentNavigation, setCurrentNavigation] = useState(" Styles");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "1rem",
        }}
      >
        <Box>
          <Typography
          variant='body2'
            onClick={() => {
              setCurrentNavigation(" Styles");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".25rem",
              mr: "1rem",
              fontWeight: currentNavigation === " Styles" ? "bold" : null,
              // paddingX: "2rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === " Styles" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
            Styles
          </Typography>
        </Box>

        <Box>
          <Typography
          variant='body2'
            onClick={() => {
              setCurrentNavigation("Varient");
            }}
            sx={{
              color: "primary.dark",
              paddingY: ".25rem",
              mr: "1rem",
              fontWeight: currentNavigation === "Varient" ? "bold" : null,
              paddingX: "1rem",
              ":hover": {
                fontWeight: "bold",
              },
              cursor: "pointer",
              borderBottom:
                currentNavigation === "Varient" ? "2px solid hsla(161, 100%, 37%, 1)" : null,
            }}
          >
            Varient
          </Typography>
        </Box>
      </Box>
      <Divider />

      {currentNavigation === " Styles" ? (
        <>
          <StylesTable />
        </>
      ) : null}

      {currentNavigation === "Varient" ? <>Varients</> : null}
    </Box>
  );
}

export default StylesTab;
