//react
import React from "react";
import { useState } from "react";

//material UI
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from "next/router";

function Navbar() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 8,
          mr: "1.5rem",
          ml: "5.5rem",
        }}
      >
        <Box  sx={{ display: "flex", alignItems: "center" }}>
          <ArrowBackIcon onClick={() => router.push("/")}/>
          <Typography variant="h5">
            <b>Cara RN Sweat</b>
          </Typography>
          <Button 
            startIcon={<CheckIcon />}
            variant="contained"
            size="small"
            sx={{ width: "auto", ml: "2rem" }}
          >
            Published
          </Button>
        </Box>
        <Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              border: "1px solid gray",
              width: "auto",
              height: "auto",
              display: "flex",
              p:'0.1rem 0.5rem',
              alignItems: "center",
            }}
          >
            <Typography variant='' >More actions</Typography>
            <ArrowDropDownTwoToneIcon />
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "auto", ml: "2rem" }}
          >
            save
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
