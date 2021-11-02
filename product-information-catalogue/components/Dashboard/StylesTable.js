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
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, Checkbox, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

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
        <TableContainer
          sx={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
          component={Paper}
        >
          <Table size="small">
            <TableHead sx={{ bgcolor: "gray.main", padding: "0.75rem 1rem" }}>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Checkbox
                      size="small"
                      sx={{ ml: -6.5 }}
                      color="secondary"
                    />
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
                      mr: -3,
                    }}
                  >
                    <SettingsIcon
                      fontSize="small"
                      sx={{ color: "hsla(161, 100%, 37%, 1)" }}
                    />
                    Sort by Newest Update
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ cursor: "pointer" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  onClick={() => router.push("/overview")}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        size="small"
                        sx={{ ml: -6.5 }}
                        color="secondary"
                      />
                      <Avatar
                        sx={{ width: "2rem", height: "2rem" }}
                        alt="Remy Sharp"
                        src={row.image}
                        variant="square"
                      />
                      &nbsp;&nbsp;
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
                  <TableCell align="left">
                    <b>Code:</b>
                    {row.code}
                  </TableCell>
                  <TableCell align="left">
                    <b>Hierarchy:</b>
                    {row.hierarchy}
                  </TableCell>
                  <TableCell align="left">{row.complete}% Complete</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: "30px",
                        width: "6rem",
                        mr: -3,
                        backgroundColor: theme.palette.secondary.light,
                        ":hover": {
                          backgroundColor: "secondary.main",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.secondary.main,
                          ":hover": {
                            color: "white",
                          },
                        }}
                        variant="caption"
                      >
                        <b>{row.published}</b>
                      </Typography>
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
