import React from "react";
import MenuBar from "./MenuBar/MenuBar";
import Pages from "./Pages/Pages";
import TopBar from "./TopBar/TopBar";

export default function Design() {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <Pages />
      <p
        style={{
          textAlign: "center",
          backgroundColor: "red",
          margin: "0px",
          padding: "10px",
          fontSize: "18px",
          color: "white",
        }}
      >
        Copyright © 2022 - Blooming~fashion - All Rights Reserved. Design by
        Darshana Perera
      </p>
    </div>
  );
}
