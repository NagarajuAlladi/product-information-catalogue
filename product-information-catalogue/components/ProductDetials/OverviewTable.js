//react
import * as React from "react";

//material-ui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box } from "@mui/system";
import { Avatar, Checkbox, Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useTheme } from "@mui/material/styles";

function createData(name, lastedit, overall, settings, image) {
  return { name, lastedit, overall, settings, image };
}

const rows = [
  createData(
    "312/Dark Blue",
    "12.02.2021",
    "100%",
    24,
    "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  ),
  createData(
    "209/Off White",
    "12.02.2021",
    "50%",
    37,
    "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
  createData(
    "200/Black",
    "12.02.2021",
    "20%",
    24,
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
];

export default function OverviewTable() {
  const theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <Table size="small" sx={{ minWidth: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><small>VARIENT</small></TableCell>
            <TableCell align="right"><small>LAST EDITED</small></TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
               <small> OVERALL COMPLETENESS</small> &nbsp;
                <InfoOutlinedIcon
                  fontSize="small"
                  sx={{ color: "hsla(161, 100%, 37%, 1)" }}
                />
              </Box>
            </TableCell>
            <TableCell align="right">
              <SettingsIcon
                fontSize="small"
                sx={{ color: "hsla(161, 100%, 37%, 1)" }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{ width: "2rem", height: "2rem" }}
                    alt="Remy Sharp"
                    src={row.image}
                    variant="square"
                  />
                  &nbsp;&nbsp;&nbsp;<b>{row.name}</b>
                </Box>
              </TableCell>
              <TableCell align="right">{row.lastedit}</TableCell>
              <TableCell align="right">{row.overall}</TableCell>
              <TableCell align="right">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color: theme.palette.secondary.main,
                  }}
                >
                  Edit
                  <ArrowDropDownOutlinedIcon
                    sx={{ ml: "2rem", color: theme.palette.primary.main }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
