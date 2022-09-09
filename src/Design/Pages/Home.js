import React from "react";
import CatogeriesBtn from "../Components/CatogeriesBtn";
import CatogeriesBtn2 from "../Components/CatogeriesBtn2";
import Caurasole from "../Components/Caurasole";
import OurBrands from "../Components/OurBrands";
import Services from "../Components/Services";

export default function Home() {
  return (
    <div style={{backgroundColor:"#f0f0f0"}}>
      <Caurasole />
      <Services />
      <CatogeriesBtn />
      <CatogeriesBtn2 />
      <OurBrands />
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
