
//react
import { useState, useEffect, useRef } from "react";

//material-ui
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";


//components
import { GENERAL_INFORMATION } from "../../utils/forms/form-config";
import GenerateForm from "../Forms/GenerateForm";

function GeneralInformation() {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const theme = useTheme();
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
        <GenerateForm
          fields={GENERAL_INFORMATION}
          ref={ref}
          spacing={6}
          submitLabel={"+Add product features"}
          // disableIfInvalid
          buttonsDisabled={disabled}
          // onSubmit={(val) => console.log("values", val)}
          onSubmit={(val) => {
            dispatch(addUser({ ...val }));
            console.log("values", val);

            console.log("form values", formdata);
          }}
          onChange={(values) => console.log("handle change values", values)}
        />
        <Typography variant="caption">
          Applies to all the channels and locales
        </Typography>
      </Box>
    </div>
  );
}

export default GeneralInformation;
