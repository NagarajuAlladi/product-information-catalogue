
//react
import React from "react";


//material-ui
import { Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";

function Sortby() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Checkbox size='small' sx={{ml:-2.5}}/>
          Showing 2332 assets
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mr:'0.8rem'
          }}
        >
          <SettingsIcon fontSize='small' sx={{ color: "hsla(161, 100%, 37%, 1)" }}/>
          Sort by Newest Update
        </Box>
      </Box>
    </div>
  );
}

export default Sortby;
