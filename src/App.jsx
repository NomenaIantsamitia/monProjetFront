import React, { useState } from "react";
import Login from "./projetSoutenance/authentification/Login";
import { Route, Routes } from "react-router-dom";
import DashboardUsers from "./projetSoutenance/authentification/DashboardUsers";
import MainLayout from "./projetSoutenance/authentification/MainLayout";



export default function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element = {<Login/>} />
     
        <Route element = {<MainLayout />}>
            <Route path="/dashboard" element = {<DashboardUsers />} />
        </Route>
      </Routes>
    
    </div>
  );
}
