//react
import React from "react";

//material Ui
import { MenuItem, Select, Typography } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  return (
    <Box sx={{ mt: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          sx={{ borderRadius: "0px" }}
          displayEmpty
          onChange={handleChange}
          sx={{ width: "15rem", height: "2.5rem" }}
        >
          <MenuItem disabled value="">
            Filter
          </MenuItem>
          <MenuItem value={10}>Filter</MenuItem>
          <MenuItem value={20}>Filter</MenuItem>
          <MenuItem value={30}>Filter</MenuItem>
        </Select>
        <Box
          sx={{
            border: "1px solid gray",
            width: "100%",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon
            fontSize="small"
            sx={{ color: theme.palette.secondary.main, m: "0 0.5rem" }}
          />
          <InputBase placeholder="Search products..." />
        </Box>
        <Box>
          <MoreVertIcon />
        </Box>
        <Box
          sx={{
            width: "4rem",
            height: "3rem",
            backgroundColor: theme.palette.primary.main,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            ml:'1rem'
          }}
        >
         <LightbulbOutlinedIcon color='secondary' fontSize='small'/>
        </Box>
      </Box>
    </Box>
  );
}

export default Searchbar;

{
  /* <Box sx={{ width: "100%" }}>
  <Search>
    <SearchIconWrapper>
      <SearchIcon sx={{ color: "green" }} fontSize="small" />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search products..."
      inputProps={{ "aria-label": "search" }}
    />
  </Search>
</Box>; */
}
