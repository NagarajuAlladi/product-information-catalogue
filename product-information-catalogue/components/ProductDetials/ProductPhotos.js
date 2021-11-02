//react
import { useState, useEffect, useRef } from "react";

//material-ui
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//components
import GenerateForm from "../Forms/GenerateForm";
import { PRODUCT_PHOTOS } from "../../utils/forms/form-config";

function ProductPhotos() {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);
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

      <Box sx={{ mt: "1rem" }}>
        <GenerateForm
          fields={PRODUCT_PHOTOS}
          ref={ref}
          spacing={6}
          submitLabel={"+Add product feature"}
          disableIfInvalid
          // buttonsDisabled={disabled}
          // onSubmit={(val) => console.log("values", val)}
          // onSubmit={(val) => {
          //   dispatch(addUser({ ...val }));
          //   console.log("values", val);

          //   console.log("form values", formdata);
          // }}
          onChange={(values) => console.log("handle change values", values)}
        />
      </Box>
    </div>
  );
}

export default ProductPhotos;
