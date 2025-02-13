import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AdminRedirect from "./pages/AdminRedirect";
import HomePage from "./pages/HomePage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
