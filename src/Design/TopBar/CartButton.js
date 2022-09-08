import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartButton() {
  return (
    <div style={{ marginTop: "25px" }}>
      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        Cart
      </Button>
    </div>
  );
}
