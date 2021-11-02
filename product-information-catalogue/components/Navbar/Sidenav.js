//react
import { useState } from "react";

//next
import { useRouter } from "next/router";

// Material UI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import LabelOffIcon from "@mui/icons-material/LabelOff";
import ImageIcon from "@mui/icons-material/Image";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import GridViewIcon from "@mui/icons-material/GridView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useTheme } from "@mui/material/styles";

function Sidenav() {
  const theme = useTheme();
  const router = useRouter();
  const [currentNavigation, setCurrentNavigation] = useState("Home");
  return (
    <>
      <div
        style={{
          backgroundColor: theme.palette.primary.main,
          height: "100%",
          width: "auto",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <List>
          <ListItem>
            <img src="/assets/images/bildemp.svg" width="30rem" />
          </ListItem>
          <ListItem>
            <HomeIcon
              sx={{
                // color: "white",
                color: router.pathname === "/home" ? "secondary.main" : "white",
                mt: "1rem",
                cursor: "pointer",
              }}
              onClick={() => router.push("/home")}
            />
          </ListItem>
          <ListItem>
            <LabelOffIcon
              sx={{
                // color: "white",
                color:
                  router.pathname ===
                  ("/products" && "/overview" && "/products")
                    ? "secondary.main"
                    : "white",
                mt: "1rem",
                cursor: "pointer",
              }}
              onClick={() => router.push("/products")}
            />
          </ListItem>
          <ListItem>
            <ImageIcon
              sx={{
                // color: "white",
                color:
                  router.pathname === "/digitalAssetManagement"
                    ? "secondary.main"
                    : "white",
                mt: "1rem",
                ":hover": {
                  bgcolor: "rgba(0, 0, 0, 0.15)",
                },
                cursor: "pointer",
              }}
              onClick={() => router.push("/digitalAssetManagement")}
            />
          </ListItem>
          <ListItem>
            <ArrowCircleUpIcon
              sx={{
                color: "white",
                mt: "1rem",
                cursor: "pointer",
              }}
            />
          </ListItem>
          <ListItem>
            <GridViewIcon
              sx={{
                color: "white",
                mt: "1rem",
                cursor: "pointer",
              }}
            />
          </ListItem>
          <ListItem>
            <EqualizerIcon
              sx={{
                color: "white",
                mt: "1rem",
                cursor: "pointer",
              }}
            />
          </ListItem>
        </List>
      </div>
    </>
  );
}

export default Sidenav;
