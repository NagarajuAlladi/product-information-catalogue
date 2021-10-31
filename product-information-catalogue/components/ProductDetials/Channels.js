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
import React from "react";
import CommentIcon from "@mui/icons-material/Comment";

function createData(name) {
  return { name };
}

const rows = [
  createData("Deutschland/NOK"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];

function Channels() {
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
          <Checkbox fontSize="small" />
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
                  <Box sx={{display:'flex',alignItems:'center'}}>

                  <Checkbox size='small' />
                  <Avatar variant="square" sizes="small" sx={{width:'3rem',height:'1.8rem'}} />
                  &nbsp;&nbsp;{row.name}
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Button>preview</Button>
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
