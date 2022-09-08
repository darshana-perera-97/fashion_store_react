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
    </div>
  );
}
