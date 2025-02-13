import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AdminRedirect from "./components/AdminRedirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/d" element={<ProductList />} />
        <Route path="/admin" element={<AdminRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
