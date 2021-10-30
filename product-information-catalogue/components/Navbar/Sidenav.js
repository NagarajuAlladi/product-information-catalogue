//react

// Material UI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import LabelOffIcon from "@mui/icons-material/LabelOff";
import ImageIcon from "@mui/icons-material/Image";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import GridViewIcon from "@mui/icons-material/GridView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import theme from "../../styles/Material-UI/theme";
import { styled, alpha, useTheme } from "@mui/material/styles";

function Sidenav() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        height: "100%",
        width: "auto",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <List>
        <ListItem>
          <img src="/assets/images/bildemp.svg" width="30rem" />
        </ListItem>
        <ListItem >
          <HomeIcon sx={{color:'white',mt:'1rem',}}/>
        </ListItem>
        <ListItem>
          <LabelOffIcon sx={{color:'white',mt:'1rem'}} />
        </ListItem>
        <ListItem >
          <ImageIcon sx={{color:'white',mt:'1rem'}} />
        </ListItem>
        <ListItem>
          <ArrowCircleUpIcon sx={{color:'white',mt:'1rem'}} />
        </ListItem>
        <ListItem >
          <GridViewIcon sx={{color:'white',mt:'1rem'}} />
        </ListItem>
        <ListItem >
          <EqualizerIcon sx={{color:'white',mt:'1rem'}} />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidenav;
