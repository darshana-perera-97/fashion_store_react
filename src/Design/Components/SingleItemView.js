import React from "react";
import Grid from "@mui/material/Grid";
import ItemFullView from "../Layouts/ItemFullView";

export default function SingleItemView(props) {
  return (
    <Grid item xs={3}>
      <div style={{ padding: "15px" }}>
        <p
          style={{
            backgroundColor: "red",
            padding: "12px 20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            margin: "0px",
          }}
        >
          {props.val.name}
        </p>
        {/* {console.log(t)} */}
        <img src={props.val.imgLink} width={300} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#C9C9C9",
          }}
        >
          <p
            style={{
              padding: "5px 15px",
              fontSize: "22px",
              fontWeight: "bold",
              margin: "0px",
            }}
          >
            Rs. {props.val.price} .00
          </p>
          {/* <Button variant="contained" size="small" style={{ margin: "8px" }}>
            View Item
          </Button> */}
          <ItemFullView values={props.val} />
        </div>
      </div>
    </Grid>
  );
}
