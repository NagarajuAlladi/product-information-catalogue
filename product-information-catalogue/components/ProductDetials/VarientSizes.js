//react
import { useState, useEffect, useRef } from "react";

//material-ui
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//components
import GenerateForm from "../Forms/GenerateForm";
import {VARIENT_SIZES} from '../../utils/forms/form-config'


function VarientSizes() {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);
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
        <GenerateForm
          fields={VARIENT_SIZES}
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
      </Box>
    </div>
  );
}

export default VarientSizes;
