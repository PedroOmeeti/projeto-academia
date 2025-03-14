import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/index";
import Inicio from "../pages/Inicio";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
