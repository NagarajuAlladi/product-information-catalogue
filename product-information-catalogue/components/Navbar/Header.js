//react
import React from "react";

//material Ui
import { Avatar, Grid } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Box } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 1),
  "&:hover": {
    backgroundColor: alpha("#fff", 1),
  },
  // marginLeft: "1rem",
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  const theme = useTheme();
  return (
    <Grid
      container
      ml="5.5rem"
      mr="1.5rem"
      mt="1rem"
      sx={{width:'auto',}}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: theme.palette.secondary.main }} fontSize="small" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>
      <Grid item display="flex" alignItems="center" justifyContent="center">
        <AppsIcon />
        <NotificationsNoneIcon sx={{ ml: 4}} />
        <Avatar
          sx={{ ml: 4,width:'2rem',height:'2rem'}}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </Grid>
    </Grid>
  );
}

export default Header;
