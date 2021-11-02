//react
import React from "react";
import { useState } from "react";

//material UI
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function DigitalAssetManagementNavbar() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 8,
          mr:"1.5rem",
          ml:"5.5rem"
        }}
      >
        <Typography variant="h5" >
          <b>Digital Asset Management</b>
        </Typography>
        <div>
          <Button
            variant="contained"
            size="small"
            
            sx={{
              ml: 4,
              color: "black",
              backgroundColor:'white',
              ":hover": {
                backgroundColor: "secondary.main",
                color:'white'
            },
            }}
          >
           Import <FileUploadOutlinedIcon/>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              ml: 4,
              color: "black",
              backgroundColor:'white',
              ":hover": {
                backgroundColor: "secondary.main",
                color:'white'
            },
            }}
          >
           Export<FileDownloadOutlinedIcon/>
          </Button>
        </div>
      </Box>
    </>
  );
}

export default DigitalAssetManagementNavbar;
