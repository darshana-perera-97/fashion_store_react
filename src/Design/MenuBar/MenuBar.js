import React from "react";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 200px",
        backgroundColor:"#868686"
      }}
    >
      <Link to="/" id="menuBarLink">Home</Link>
      <Link to="/new" id="menuBarLink">New Arivals</Link>
      <Link to="/men" id="menuBarLink">Men</Link>
      <Link to="/women" id="menuBarLink">Women</Link>
      <Link to="/kids" id="menuBarLink">Kids & Babies</Link>
      <Link to="/gift" id="menuBarLink">Gift Vouchers</Link>
      <Link to="/branches" id="menuBarLink">Branches</Link>
      <Link to="/about" id="menuBarLink">AboutUs</Link>
    </div>
  );
}
