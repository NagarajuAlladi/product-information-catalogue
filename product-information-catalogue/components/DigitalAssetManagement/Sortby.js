import { Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

function Sortby() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Checkbox />
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
          <SettingsIcon />
          Sort by Newest Update
        </Box>
      </Box>
    </div>
  );
}

export default Sortby;
