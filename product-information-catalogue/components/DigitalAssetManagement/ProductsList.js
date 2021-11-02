
//react
import { useTheme } from "@emotion/react";



//material-ui
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { borderRadius, Box, height } from "@mui/system";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CheckIcon from "@mui/icons-material/Check";

function ProductsList({ title, images, comments }) {
  console.log("title is", title);
  const theme = useTheme();
  return (
    <div>
      <Box>
        <Card
          sx={{
            width: "100%",
            height: "8.5rem",
            mb: "0.5rem",
            p: "0.4rem",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{
                width: "5rem",
                height: "5rem",
                mb: "0.3rem",
                borderRadius: "0.3rem",
              }}
              src={images}
              // src="https://images.unsplash.com/photo-1564400143768-2f8ea3f310f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography variant="body2" sx={{ mb: "0.8rem" }}>
                <b>{title}</b>
              </Typography>
              <Typography variant="caption">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CropOriginalIcon sx={{ fontSize: "1.3rem" }} />
                  680*120 | 1.2Mb
                </Box>
              </Typography>
            </CardContent>
          </Box>
          <Divider />
          <CardActions disableSpacing>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChatBubbleOutlineIcon fontSize="small" />
              <Typography variant="caption">&nbsp;{comments}Comment</Typography>
            </Box>
            <Typography variant="caption" ml="auto">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckIcon sx={{ fontSize: "1rem" }} />
                Published
              </Box>
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default ProductsList;
