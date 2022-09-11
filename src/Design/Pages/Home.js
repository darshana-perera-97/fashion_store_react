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
      
    </div>
  );
}
