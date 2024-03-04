import React from "react";
import Overview from "@pages-sections/alerts/overview";
import Alert from "@pages-sections/alerts/alert";
import NavBar from "@components/NavBar";


const Alerts: React.FC = () => {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      {/* <Overview /> */}
      <Alert />
    </div>
  );
};

export default Alerts;
