import { Alert } from "@mui/material";
import React, { useContext } from "react";
import AlertContext from "../../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    <>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <Alert
            severity={alert.type}
            sx={{
              position: "fixed",
              bottom: 20,
              left: 20,
              width: 300,
            }}
          >
            {alert.msg}
          </Alert>
        ))}
    </>
  );
};

export default Alerts;
