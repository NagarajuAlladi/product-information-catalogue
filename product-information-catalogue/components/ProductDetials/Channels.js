//react
import React from "react";


//material-ui
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";
import CommentIcon from "@mui/icons-material/Comment";
import { useTheme } from "@mui/material/styles";

function createData(name, images) {
  return { name, images };
}

const rows = [
  createData(
    "Deutschland/NOK",
    "https://images.unsplash.com/photo-1505170726118-98436a741f17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsYWdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
  createData(
    "Ice cream sandwich",
    "https://images.unsplash.com/photo-1562917947-859259de851c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZsYWdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
  createData(
    "Eclair",
    "https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZsYWdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
  createData(
    "Cupcake",
    "https://images.unsplash.com/photo-1619115439824-11e07e2af5e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGZsYWdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
  createData(
    "Gingerbread",
    "https://images.unsplash.com/photo-1562917947-859259de851c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZsYWdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ),
];

function Channels() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Box sx={{ mt: "1.5rem" }}>
        <Typography variant="h6">
          <b>Channels and locales</b>
        </Typography>
        <Typography variant="caption">
          Here you can uncheck the channels you dont want to publish this
          product to.
        </Typography>
        <Typography variant="subtitle2">Publish to:</Typography>
        <Typography variant="subtitle2">
          <Checkbox fontSize="small" color="secondary" />
          CUBES ONLINE
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox size="small" color="secondary" />
                    <Avatar
                      variant="square"
                      sizes="small"
                      sx={{ width: "3rem", height: "1.8rem" }}
                      src={row.images}
                    />
                    &nbsp;&nbsp;{row.name}
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Button sx={{ color: theme.palette.secondary.main }}>
                    preview
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={<Button>preview</Button>}
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                  size='small'
                  sx={{width:'0'}}
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemAvatar >
                  <Avatar  variant='square' sizes='small'
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
              <Divider />
            </ListItem>
          );
        })}
      </List> */}
    </div>
  );
}

export default Channels;
