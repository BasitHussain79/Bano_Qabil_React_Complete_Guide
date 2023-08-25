import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/features/Auth/Login";
import Register from "../components/features/Auth/Register";
import AuthContext from "../context/authContext/authContext";
import Home from "../pages";
import About from "../pages/about";
import Layout from "./layout";
import RequireAuth from "./requireAuth";

const AppRouter = () => {
  const { isAuthenticated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {!isAuthenticated && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </>
        )}

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* catch all */}
        <Route
          path="*"
          element={
            <Navigate to={isAuthenticated ? "/" : "/login"} />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
