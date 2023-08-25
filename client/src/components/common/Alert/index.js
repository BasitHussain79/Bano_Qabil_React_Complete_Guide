import { Alert, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import AlertContext from "../../../context/alertContext/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    <>
      <Toolbar />
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <Alert
            severity={alert.type}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
            }}
          >
            {alert.msg}
          </Alert>
        ))}
    </>
  );
};

export default Alerts;
