import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import AllItems from "./AllItems";
import Branches from "./Branches";
import Home from "./Home";
import Men from "./Men";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all" element={<AllItems />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="branches" element={<Branches />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Men />} />
        <Route path="kids" element={<Men />} />
        <Route path="gift" element={<Men />} />
      </Routes>
    </div>
  );
}
