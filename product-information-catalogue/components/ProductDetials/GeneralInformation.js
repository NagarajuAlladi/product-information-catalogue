import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function GeneralInformation() {
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Box>
            <Typography variant="h6">
              <b>General Information</b>
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
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Brand Name</Typography>
              </label>
              <TextField disabled size="small" value="Cubus" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Default Name</Typography>
              </label>
              <TextField disabled size="small" value="312 / DarkBlue" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Displayed Name</Typography>
              </label>
              <TextField size="small" value="CARA R N SWEAT" />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Description</Typography>
              </label>
              <TextField size="small" multiline rows={4} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Fit</Typography>
              </label>
              <TextField size="small" />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Composition</Typography>
              </label>
              <TextField size="small" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Washing Information</Typography>
              </label>
              <TextField size="small" multiline rows={4} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>
                  <Typography variant="">Care</Typography>
                </label>
                <Button>View all care tags</Button>
              </Box>
              <TextField size="small" />
              <Typography variant="caption">
                Applies to all the channels and locales
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" sx={{p:'0.5rem 1rem'}}>
              <Typography variant="caption">+Add product features</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GeneralInformation;
