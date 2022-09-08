import React from "react";
import CartButton from "./CartButton";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import SignOrLoginBtn from "./SignOrLoginBtn";

export default function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        padding: "15px 100px",
        justifyContent: "space-between",
        backgroundColor:"#F1F1F1"
      }}
    >
      <Logo />
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        <SearchBox />
        <SignOrLoginBtn />
        <CartButton />
      </div>
    </div>
  );
}
