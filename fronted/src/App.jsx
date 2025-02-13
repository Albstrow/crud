import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AdminRedirect from "./components/AdminRedirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/demo" element={<ProductList />} />
        <Route path="/admin" element={<AdminRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
