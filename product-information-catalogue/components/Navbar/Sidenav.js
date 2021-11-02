//react
import { useState } from "react";
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
import Navbar from "../Dashboard/Navbar";
import Products from "../Dashboard/Products";
import DigitalAssetManagementNavbar from "../DigitalAssetManagement/DigitalAssetManagementNavbar";
import DigitalAssetManagementSearchbar from "../DigitalAssetManagement/DigitalAssetManagementSearchbar";
import AllProductsTab from "../DigitalAssetManagement/AllMediaTab";
import AllMediaTab from "../DigitalAssetManagement/AllMediaTab";
import { useRouter } from "next/router";

function Sidenav() {
  const theme = useTheme();
  const router = useRouter();
  const [currentNavigation, setCurrentNavigation] = useState("Home");
  return (
    <>
      <div
        style={{
          backgroundColor: theme.palette.secondary.main,
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
                color: "white",
                // color: router.pathname === ("/" && 'primary.light'),
                mt: "1rem",
                ":hover": {
                  bgcolor: "rgba(0, 0, 0, 0.15)",
                },
                cursor: "pointer",
              }}
              onClick={() => router.push("/home")}
            />
          </ListItem>
          <ListItem>
            <LabelOffIcon
              sx={{
                color: "white",
                // color: router.pathname === "/products" && 'primary.light',
                mt: "1rem",
                ":hover": {
                  bgcolor: "rgba(0, 0, 0, 0.15)",
                },
                cursor: "pointer",
              }}
              onClick={() => router.push("/products")}
            />
          </ListItem>
          <ListItem>
            <ImageIcon
              sx={{
                color: "white",
                // color: router.pathname === "/digitalAssetManagement" && 'primary.light',
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
                ":hover": {
                  bgcolor: "rgba(0, 0, 0, 0.15)",
                },
                cursor: "pointer",
              }}
            />
          </ListItem>
          <ListItem>
            <GridViewIcon
              sx={{
                color: "white",
                mt: "1rem",
                ":hover": {
                  bgcolor: "rgba(0, 0, 0, 0.15)",
                },
                cursor: "pointer",
              }}
            />
          </ListItem>
          <ListItem>
            <EqualizerIcon
              sx={{
                color: "white",
                mt: "1rem",
                ":hover": {
                  bgcolor: "rgba(0, 0, 0, 0.15)",
                },
                cursor: "pointer",
              }}
            />
          </ListItem>
        </List>
      </div>
      {/* {currentNavigation === "Home" ? (
        <>
          <h1 style={{ marginLeft: "5rem" }}>HomeIcon</h1>
        </>
      ) : null}
      {currentNavigation === "Label" ? (
        <>
          <Navbar />
          <Products />
        </>
      ) : null}
      {currentNavigation === "Image" ? (
        <>
          <DigitalAssetManagementNavbar />
          <AllMediaTab />
        </>
      ) : null}
      {currentNavigation === "Arrow" ? (
        <>
          <h1 style={{ marginLeft: "5rem" }}>Arrow</h1>
        </>
      ) : null}
      {currentNavigation === "View" ? (
        <>
          <h1 style={{ marginLeft: "5rem" }}>View</h1>
        </>
      ) : null}
      {currentNavigation === "Equilizer" ? (
        <>
          <h1 style={{ marginLeft: "5rem" }}>Equilizer</h1>
        </>
      ) : null} */}
    </>
  );
}

export default Sidenav;
