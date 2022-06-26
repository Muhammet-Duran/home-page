import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Projects } from "./pages/Index";
function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/projects" element={<About />} />
      <Route path="/about" element={<Projects />} />
    </Routes>
  );
}

export default Router;
