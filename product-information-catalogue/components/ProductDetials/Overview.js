import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OverviewTable from "./OverviewTable";

function Overview() {
  return (
    <div>
      <Box>
        <Box sx={{mt:'1rem'}}>
          <Typography variant="h6">
            <b>Completeness overview</b>
          </Typography>
          <Typography variant="caption">
            Product last edit on 14.08.2021 at 11:00AM
          </Typography>
          <OverviewTable/>
        </Box>
      </Box>
    </div>
  );
}

export default Overview;
