import React from "react";
import Grid from "@mui/material/Grid";
import location from "../Components/images/branch.png";
import tp from "../Components/images/call.png";
import time from "../Components/images/clock.png";
import address from "../Components/images/map.png";

const branchList = [
  {
    name1: "Main Branch",
    name2: "Mahawewa",
    address: "No 1, Colombo Rd, Mahawewa",
    tp: "+94 12 34 56 789",
    time: "8.30 am - 8.30 pm",
  },
  {
    name1: "Show Room",
    name2: "Madampe",
    address: "Silver Town, Madampe",
    tp: "+94 12 34 56 789",
    time: "9.30 am - 4.30 pm",
  },
  {
    name1: "Fashion Store",
    name2: "Nattandiya",
    address: "New Bus Stand, Nattandiya",
    tp: "+94 12 34 56 789",
    time: "9.30 am - 4.30 pm",
  },
  {
    name1: "Blooming Fashion",
    name2: "Marawila",
    address: "Church Rd, Marawila",
    tp: "+94 12 34 56 789",
    time: "9.30 am - 4.30 pm",
  },
];

export default function Branches() {
  return (
    <div style={{ padding: "50px 150px" }}>
      <Grid container spacing={2}>
        {branchList.map((val, key) => {
          return (
            <Grid item xs={4} key={key}>
              <div
                style={{
                  backgroundColor: "#e8e8e8",
                  padding: "30px",
                  borderRadius: "15px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={location} />
                  <p
                    style={{
                      margin: "0px",
                      fontWeight: "bold",
                      color: "red",
                      fontSize: "22px",
                      paddingLeft: "20px",
                    }}
                  >
                    {val.name1} <br /> {val.name2}
                  </p>
                </div>
                <div
                  style={{
                    paddingLeft: "50px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <img src={address} />
                  <p
                    style={{
                      margin: "-5px",
                      fontWeight: "bold",
                      paddingLeft: "20px",
                    }}
                  >
                    {val.address}
                  </p>
                </div>
                <div
                  style={{
                    paddingLeft: "50px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <img src={tp} />
                  <p
                    style={{
                      margin: "-5px",
                      fontWeight: "bold",
                      paddingLeft: "20px",
                    }}
                  >
                    {val.tp}
                  </p>
                </div>
                <div
                  style={{
                    paddingLeft: "50px",
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <img src={time} />
                  <p
                    style={{
                      margin: "-5px",
                      fontWeight: "bold",
                      paddingLeft: "20px",
                    }}
                  >
                    {val.time}
                  </p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
