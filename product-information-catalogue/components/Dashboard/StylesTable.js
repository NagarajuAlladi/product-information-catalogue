//react
import * as React from "react";

import { useRouter } from "next/router";

//material ui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TablePagination from "@mui/material/TablePagination";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, Checkbox, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Router } from "next/dist/client/router";

function createData(
  name,
  Varients,
  code,
  hierarchy,
  image,
  complete,
  published
) {
  return { name, Varients, code, hierarchy, image, complete, published };
}

const rows = [
  createData(
    "Cara RN Sweat",
    "3",
    "77712356-456",
    "Texttiels/Tops",
    "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "50",
    "PUBLISHED"
  ),
  createData(
    "Demi Sweater",
    "4",
    "77712356-456",
    "Texttiels/Tops/T-shirts",
    "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "100",
    "DRAFT"
  ),
  createData(
    "M Crason Shirt",
    "3",
    "77712356-456",
    "Texttiels/T-shirts",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "50",
    "DRAFT"
  ),
  createData(
    "M Tony Tee",
    "3",
    "77712356-456",
    "Texttiels/Tops/T-shirts",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "75",
    "ON HOLD"
  ),
  createData(
    "M Tim Lee",
    "3",
    "77712356-456",
    "Texttiels/Tops/T-shirts",
    "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "90",
    "PUBLISHED"
  ),
  createData(
    "X-Slim Jeans",
    "5",
    "77712356-456",
    "Texttiels/Tops/T-shirts",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "100",
    "PUBLISHED"
  ),
];

export default function StylesTable() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox />
            Showing 16 products
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <SettingsIcon />
            Sort by Newest Update
          </Box>
        </Box> */}
        <TableContainer

          sx={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
          component={Paper}
        >
          <Table size="small">
            <TableHead sx={{bgcolor: "gray.main",padding: "0.75rem 1rem",}}>
              <TableRow>
                <TableCell >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Checkbox size='small'/>
                    Showing 16 products
                  </Box>
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <SettingsIcon />
                    Sort by Newest Update
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ cursor: "pointer"}}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  onClick={() => router.push("/overview")}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox size="small" />

                      <Avatar
                        sx={{ width: "2rem", height: "2rem" }}
                        alt="Remy Sharp"
                        src={row.image}
                        variant="square"
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Box>
                          &nbsp;&nbsp;
                          <Typography variant="">{row.name}</Typography>
                        </Box>
                        <Box sx={{ ml: "0.4rem" }}>
                          <Typography variant="caption">
                            {row.Varients} Varients
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">Code:{row.code}</TableCell>
                  <TableCell align="left">Hierarchy:{row.hierarchy}</TableCell>
                  <TableCell align="left">{row.complete}% Complete</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ borderRadius: "30px", width: "6rem" }}
                    >
                      <Typography variant="caption">{row.published}</Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
