import React from "react";
import i1 from "./images/brand1.png";
import i2 from "./images/brand2.png";
import i3 from "./images/brand3.png";
import i4 from "./images/brand4.png";
import i5 from "./images/brand5.png";
import i6 from "./images/brand6.png";

export default function OurBrands() {
  return (
    <div>
      <br />
      <br />
      <hr />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "20px",
          fontSize: "30px",
        }}
      >
        SHOP BY CATEGORY
      </p>
      <div style={{ textAlign: "center" }}>
        <img src={i1} style={{ padding: "0px 20px" }} />
        <img src={i2} style={{ padding: "0px 20px" }} />
        <img src={i3} style={{ padding: "0px 20px" }} />
        <img src={i4} style={{ padding: "0px 20px" }} />
        <img src={i5} style={{ padding: "0px 20px" }} />
        <img src={i6} style={{ padding: "0px 20px" }} />
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}
