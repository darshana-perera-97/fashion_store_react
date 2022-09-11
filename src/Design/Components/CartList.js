import React from "react";
import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";
import TotalCalculator from "./TotalCalculator";

export default function CartList() {
  const store = useSelector((state) => state);

  return (
    <div style={{ padding: "20px 50px" }}>
      {store.CartReducer.map((val, key) => {
        return <SingleCartItem key={key} val={val} />;
      })}

      <hr />
      <div style={{ display: "flex" }}>
        <p
          style={{
            padding: "20px 0px",
            fontSize: "25px",
            margin: "0px",
            color: "red",
          }}
        >
          Total cost for all orders - Rs. 
        </p>
        <TotalCalculator />
        <p
          style={{
            padding: "20px 0px",
            fontSize: "25px",
            margin: "0px",
            color: "red",
          }}
        >
          .00
        </p>
      </div>
    </div>
  );
}
