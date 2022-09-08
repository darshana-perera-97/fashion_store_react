import React from "react";
import i1 from "./images/card.png";
import i2 from "./images/delivery.png";
import i3 from "./images/dress.png";
import i4 from "./images/exchange.png";
import i5 from "./images/money.png";
import i6 from "./images/shop.png";

export default function Services() {
  return (
    <div style={{ padding: "30px 0px" }}>
      <p
        style={{
          textAlign: "center",
          margin: "20px 0px",
          fontSize: "25px",
          fontWeight: "bold",
          color: "white",
          background: "red",
          padding: "5px ",
        }}
      >
        Services
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          paddingLeft: "8%",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#E4E1E1",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <img src={i1} />
          <p
            style={{
              margin: "0px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {" "}
            Secure <br />
            Payments
          </p>
        </div>
        <div
          style={{
            display: "flex",
            background: "#E4E1E1",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <img src={i2} />
          <p
            style={{
              margin: "0px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {" "}
            Island-wide <br />
            Delivery
          </p>
        </div>
        <div
          style={{
            display: "flex",
            background: "#E4E1E1",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <img src={i3} />
          <p
            style={{
              margin: "0px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {" "}
            Unlimited <br />
            Unique Designs
          </p>
        </div>
        <div
          style={{
            display: "flex",
            background: "#E4E1E1",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <img src={i4} />
          <p
            style={{
              margin: "0px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {" "}
            Exchange from <br />
            Any Store
          </p>
        </div>
        <div
          style={{
            display: "flex",
            background: "#E4E1E1",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <img src={i5} />
          <p
            style={{
              margin: "0px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {" "}
            Cash-On <br />
            Delivery
          </p>
        </div>
        <div
          style={{
            display: "flex",
            background: "#E4E1E1",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          <img src={i6} />
          <p
            style={{
              margin: "0px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {" "}
            Islandwide <br />
            Stores
          </p>
        </div>
      </div>
    </div>
  );
}
