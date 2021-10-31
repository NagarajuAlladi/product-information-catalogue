import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ProductPhotos() {
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}
      >
        <Box>
          <Typography variant="h5">
            <b>Product Photos</b>
          </Typography>
          <Typography variant="caption">All channels and locales</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>Get image inspiration</Button>
          <MoreVertIcon />
        </Box>
      </Box>
      <Grid mt="1rem">
        <img
          src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            marginRight: "1rem",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            marginRight: "1rem",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            marginRight: "1rem",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            marginRight: "1rem",
          }}
        />
      </Grid>
      <Grid container mt='1rem'>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>
              <Typography variant="">Model features</Typography>
            </label>
            <TextField size="small" value='182 cm/ M size' />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductPhotos;
