import React, { useState } from "react";
import Login from "./projetSoutenance/authentification/Login";
import { Route, Routes } from "react-router-dom";


export default function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element = {<Login/>} />
      </Routes>
    
    </div>
  );
}
