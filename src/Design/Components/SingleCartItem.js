import React from "react";
export default function SingleCartItem(prop) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "20px",
      }}
    >
      
      <div>
        <p style={{ margin: "0px", fontSize: "22px" }}>{prop.val.itemCode}</p>
        <p style={{ margin: "0px" }}>
          You have ordered {prop.val.items} items from this item
        </p>
      </div>
      <p style={{ margin: "0px", fontSize: "22px", color: "red" }}>
        Rs. {prop.val.price} .00
      </p>

      {/* {itemList.map((val, key) => {
        return <SingleItemView key={key} val={val} />;
      })} */}
    </div>
  );
}
