import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import SingleItemView from "../Components/SingleItemView";

export default function AllItems() {
  const itemList = useSelector((state) => state.itemReducer);
  // const itemList = store.itemReducer;
  // console.log(itemList);
  return (
    <div style={{ padding: "30px 80px" }}>
      <Grid container spacing={2}>
        
          {itemList.map((val, key) => {
            return <SingleItemView key={key} val={val} />;
          })}
        </Grid>
    </div>
  );
}
