import * as React from "react";
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

function createData(name, lastedit, overall, settings) {
  return { name, lastedit, overall, settings };
}

const rows = [
  createData("312 / Dark Blue", "12.02.2021", "100%", 24),
  createData("209 / Off White", "12.02.2021", "50%", 37),
  createData("200 / Black", "12.02.2021", "20%", 24),
];

export default function OverviewTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>VARIENT</TableCell>
            <TableCell align="right">LAST EDITED</TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                OVERALL COMPLETENESS
                <InfoOutlinedIcon />
              </Box>
            </TableCell>
            <TableCell align="right">
              <SettingsIcon />
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
                <Box sx={{display:'flex',alignItems:'center'}}>
                  <Avatar
                    sx={{ width: "2rem", height: "2rem" }}
                    alt="Remy Sharp"
                    src={row.image}
                    variant="square"
                  />
                  &nbsp;&nbsp;{row.name}
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
                  }}
                >
                  Edit
                  <ArrowDropDownOutlinedIcon sx={{ ml: "2rem" }} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
