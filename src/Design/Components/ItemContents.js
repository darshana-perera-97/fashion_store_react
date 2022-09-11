import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { createOrder } from "../../Redux/CartActions";

export default function ItemContents(val) {
  const dispatch = useDispatch();
  // console.log(val.data.itemCode)
  const addCart = () => {
    if (no != 0) {
      dispatch(
        createOrder(
          val.data.name,
          no,
          ((val.data.price * (100 - val.data.discounts)) / 100) * no
        )
      );
      window.alert("Item Added to Cart");
    }
  };
  // console.log(val.data);
  const colors = val.data.clrs;
  const sizes = val.data.size;
  const [no, setNo] = React.useState(0);
  if (no < 0) {
    setNo(0);
  }

  const add = () => {
    // console.log("first");
    setNo(no - 1);
  };
  const remove = () => {
    // console.log("se");
    setNo(no + 1);
  };

  // console.log(colors);
  return (
    <div style={{ padding: "30px", display: "flex" }}>
      <img src={val.data.imgLink} height={350} />
      <div style={{ padding: "20px" }}>
        <p style={{ fontSize: "30px" }}>{val.data.name}</p>
        <p style={{ fontSize: "15px", margin: "0px" }}>
          Catogery: {val.data.catogery}
        </p>
        <p style={{ fontSize: "22px", margin: "0px" }}>
          Price : Rs.{val.data.price} .00
        </p>
        <br />
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "22px", margin: "0px" }}>Colors : </p>
          {colors.map((v, k) => {
            return (
              <p
                style={{
                  color: v,
                  backgroundColor: v,
                  margin: "7px",
                  width: "20px",
                }}
              >
                .
              </p>
            );
          })}
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "22px", margin: "0px" }}>Sizes : </p>
          {sizes.map((v, k) => {
            return (
              <p
                style={{
                  margin: "7px",
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "darkBlue",
                  padding: "1px 5px",
                }}
              >
                {v}
              </p>
            );
          })}
        </div>
        <p style={{ fontSize: "22px", margin: "0px" }}>
          Discounts : {val.data.discounts} %
        </p>
        <p style={{ fontSize: "22px", color: "red", fontWeight: "bold" }}>
          Price: Rs. {(val.data.price * (100 - val.data.discounts)) / 100} .00
        </p>
        <div style={{ display: "flex" }}>
          <button onClick={add}>-</button>
          <p
            style={{
              paddingTop: "2px",
              margin: "0px",
              width: "100px",
              textAlign: "center",
              backgroundColor: "#EBE9E9",
            }}
          >
            {no}
          </p>
          <button onClick={remove}>+</button>
        </div>
        <p style={{ fontSize: "20px", color: "red", fontWeight: "bold" }}>
          Total : Rs.{" "}
          {((val.data.price * (100 - val.data.discounts)) / 100) * no} .00
        </p>
        <Button autoFocus onClick={addCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
