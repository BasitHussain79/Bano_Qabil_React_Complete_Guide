import { Alert } from "@mui/material";
import React, { useContext } from "react";
import AlertContext from "../../../context/alert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    <>
      {alerts?.length > 0 &&
        alerts.map((data) => (
          <Alert
            severity={data.type}
            sx={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
            }}
          >
            {data.msg}
          </Alert>
        ))}
    </>
  );
};

export default Alerts;
