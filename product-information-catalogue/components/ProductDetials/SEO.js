import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SEO() {
  return (
    <div>
      <Grid container justifyContent="space-between" mt="1rem">
        <Grid item>
          <Box>
            <Typography variant="h6">
              <b>SEO</b>
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
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">SEO Title</Typography>
              </label>
              <TextField size="small" value="L Cara R N Sweat" />
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
                <Typography variant="">SEO Description</Typography>
              </label>
              <TextField size="small"  multiline rows={4} value='Dark Blue'/>
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
                <Typography variant="">SEO Keywords</Typography>
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
                <Typography variant="">Preview</Typography>
              </label>
              <TextField size="small"  multiline rows={4} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SEO;
