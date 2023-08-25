import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext/authContext";

const RequireAuth = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
};

export default RequireAuth;
