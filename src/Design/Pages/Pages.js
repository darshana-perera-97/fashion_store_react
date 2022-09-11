import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import AllItems from "./AllItems";
import Branches from "./Branches";
import Home from "./Home";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="branches" element={<Branches />} />
        <Route path="all" element={<AllItems />} />
      </Routes>
    </div>
  );
}
