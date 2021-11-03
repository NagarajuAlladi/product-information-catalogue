//react
import { useState } from "react";

//material-ui
import {
  Avatar,
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';

//components
import OverviewTable from "./OverviewTable";
import Channels from "./Channels";

function Overview() {
  const theme = useTheme();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
              height: "24rem",
              backgroundColor: theme.palette.primary.main,
              ml: "2rem",
              p: "1rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <LightbulbOutlinedIcon sx={{ ml: -1,color: theme.palette.secondary.main }} />
              <Typography variant="subtitle2" sx={{ color: "white" }}>
               &nbsp; Insights
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="white">
              Prioritisstion
            </Typography>
            <Typography variant="caption" color="white">
              Perhaps you want to start with{" "}
              <span style={{ color: theme.palette.secondary.main }}>
                209/Off White
              </span>{" "}
              varient,as it is due to be published in 10 days
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", p: "0.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{ width: "2rem", height: "2rem",ml:-1}}
                  alt="Remy Sharp"
                  
                  src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  variant="square"
                />
                <Typography variant="caption" color="white">
                  &nbsp;&nbsp;209/Off White
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{
                  width: "5rem",
                  mt: "0.5rem",
                  ml:-1,
                  backgroundColor: theme.palette.secondary.main,
                  ":hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                <Typography variant="caption">Edit now</Typography>
              </Button>
            </Box>
            <Divider sx={{backgroundColor:'white'}}/>
            <Typography variant="subtitle2" color="white">
              Impact
            </Typography>
            {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              displayEmpty
              onChange={handleChange}
              sx={{ width: "10rem", height: "1.5rem",border:'1px white'}}
            >
              <MenuItem disabled value="">
                <Typography variant="subtitle2" color="white">
                  Since last Edit
                </Typography>
              </MenuItem>
              <MenuItem value={10}>Filter</MenuItem>
              <MenuItem value={20}>Filter</MenuItem>
              <MenuItem value={30}>Filter</MenuItem>
            </Select> */}
            <Typography variant="caption" color="white">
              ONLINE PDP CONVERSION
            </Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography color="white">
              <b>4.21%</b>
            </Typography>
            <WavesOutlinedIcon sx={{color:theme.palette.secondary.main}}/>
            </Box>
            <Typography variant="caption" sx={{color:theme.palette.secondary.main}}>
              +1.21%
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                width: "9rem",
                mt: "0.8rem",
                backgroundColor: theme.palette.secondary.main,
                ":hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              <Typography variant="caption">See full report</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;
