import React from "react";
import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";

export default function CartList() {
  const store = useSelector((state) => state);
  // console.log(store.CartReducer);
  return (
    <div style={{ padding: "20px 50px" }}>
      {store.CartReducer.map((val, key) => {
        return <SingleCartItem key={key} val={val} />;
      })}
    </div>
  );
}
