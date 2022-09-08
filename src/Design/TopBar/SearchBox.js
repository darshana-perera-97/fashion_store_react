import React from "react";

export default function SearchBox() {
  const [search, setSearch] = React.useState("");
  console.log(search);
  return (
    <div style={{marginTop:"30px"}}>
      <input
        type="search"
        placeholder="Search products..."
        style={{
          fontSize: "18px",
          padding: "10px 30px",
          borderRadius: "30px",
          borderColor: "grey",
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
