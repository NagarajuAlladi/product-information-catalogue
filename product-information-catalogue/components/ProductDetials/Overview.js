
//material-ui
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

//components
import OverviewTable from "./OverviewTable";
import Channels from "./Channels";

function Overview() {
  const theme = useTheme();
  return (
    <div>
      <Grid container sx={{ mt: "1.5rem" }}>
        <Grid item xs={10}>
          <Box>
            <Typography variant="h6">
              <b>Completeness overview</b>
            </Typography>
            <Typography variant="caption">
              Product last edit on 14.08.2021 at 11:00AM
            </Typography>
            <OverviewTable />
          </Box>
          <Box>
            <Channels />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              width: "13rem",
              height: "25rem",
              backgroundColor: theme.palette.secondary.main,
              ml: "2rem",
            }}
          >
            Hello
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;
