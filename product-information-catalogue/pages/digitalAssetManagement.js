

//react
import React from "react";

//components
import AllMediaTab from "../components/DigitalAssetManagement/AllMediaTab";
import DigitalAssetManagementNavbar from "../components/DigitalAssetManagement/DigitalAssetManagementNavbar";

function digitalAssetManagement() {
  return (
    <div>
      <DigitalAssetManagementNavbar />
      <AllMediaTab />
    </div>
  );
}

export default digitalAssetManagement;
