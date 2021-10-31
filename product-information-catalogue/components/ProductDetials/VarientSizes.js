import { Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";

function VarientSizes() {
  return (
    <div>
      <Grid container justifyContent="space-between" mt="1rem">
        <Grid item>
          <Box>
            <Typography variant="h6">
              <b>Varient Sizes</b>
            </Typography>
            <Typography variant="caption">Cubus-online/Norwegian</Typography>
          </Box>
        </Grid>
        <Grid item>
          <MoreVertIcon />
        </Grid>
      </Grid>
      <Box mt="1rem">
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Size Type</Typography>
              </label>
              <TextField size="small" value="European" />
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    </div>
  )
}

export default VarientSizes
