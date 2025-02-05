import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
