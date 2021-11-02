//react
import * as React from "react";

//material-ui
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "EAN:1233" },
    { key: 1, label: "Has Photos" },
    { key: 2, label: "Complete:0%" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: 'center',
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        mt: "1rem",
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.key}>
            <Chip
              color='info'
              deleteIcon={
                <IconButton >
                  <CancelIcon fontSize='small' sx={{color:theme.palette.error.main,m:-2}} />
                </IconButton>
              }
              icon={icon}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
