import React from "react";
import { useSelector } from "react-redux";

export default function TotalCalculator() {
  const store = useSelector((state) => state);
  let t = 0;
  //   console.log(store.CartReducer);
  //   store.CartReducer.map((val, key) => {
  //     return setAll(val.price + all);
  //   });
  for (let i = 0; i < store.CartReducer.length; i++) {
    console.log(store.CartReducer[i].price);
    t = store.CartReducer[i].price + t;
  } 
  return <div><p
  style={{
    padding: "20px 0px",
    fontSize: "25px",
    margin: "0px",
    color: "red",
  }}
>
  {t}
</p></div>;
}
