//react
import React from "react";

//material Ui
import { Typography } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Box } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid gray",
  backgroundColor: alpha("#fff", 1),
  marginLeft: "5rem",
  width: "auto",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    width: "100%",
    height: "2.3rem",
  },
}));

function Searchbar() {
  const theme = useTheme();
  return (
    <Box sx={{mt:'1rem'}}>
    <Box sx={{ display: "flex", alignItems: "center"}}>
      <Box
        sx={{
          border: "1px solid gray",
          width: "12rem",
          height: "3rem",
          display: "flex",
          // ml: "5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ pl: "1rem" }}>Filter</Typography>
        <ArrowDropDownTwoToneIcon />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "green" }} fontSize="small" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search products..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <Box>
        <MoreVertIcon />
      </Box>
      {/* <Box
        sx={{
          width: "4rem",
          height: "4rem",
          border: "1px solid gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LightbulbIcon sx={{color:'green'}} />
      </Box> */}
    </Box>
    </Box>
  );
}

export default Searchbar;
