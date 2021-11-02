import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GenerateForm from "../Forms/GenerateForm";
import { VARIENT_ATTRIBUTES } from "../../utils/forms/form-config";
import { useState, useEffect, useRef } from "react";

function VarientAttribute() {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <Grid container justifyContent="space-between" mt="1rem">
        <Grid item>
          <Box>
            <Typography variant="h6">
              <b>Varient Attributes</b>
            </Typography>
            <Typography variant="caption">Cubus-online/Norwegian</Typography>
          </Box>
        </Grid>
        <Grid item>
          <MoreVertIcon />
        </Grid>
      </Grid>
      <Box mt="1rem">

      <GenerateForm
          fields={VARIENT_ATTRIBUTES}
          ref={ref}
          spacing={6}
          // submitLabel={"+Add product features"}
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
        {/* <Grid container spacing={8}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <Typography variant="">Color</Typography>
              </label>
              <TextField size="small" value="DarkBlue" />
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
                <Typography variant="">Color Code</Typography>
              </label>
              <TextField size="small" value="312 / DarkBlue" />
              <Typography variant="caption">
                Applies to all the channels and locales
              </Typography>
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
                <Typography variant="">Season</Typography>
              </label>
              <TextField size="small" value="Autumn/Winter 2018" />
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
                <Typography variant="">Price(USD)</Typography>
              </label>
              <TextField size="small" value="299" />
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
}

export default VarientAttribute;
