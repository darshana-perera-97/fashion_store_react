import React from "react";

export default function SingleCartItem(prop) {
  return (
    <div>
      {prop.val.itemCode} <br/>
      {prop.val.items}
    </div>
  );
}
