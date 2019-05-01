import React from "react";

export function Yellow({ items }) {
  console.log("Yellow render");

  const [myCounter, setMyCounter] = React.useState(0);
  return (
    <div
      style={{
        border: "1px dashed yellow",
        backgroundColor: "yellow",
        margin: "8px"
      }}
    >
      <div>Yellow</div>

      <div>MyCounter {myCounter}</div>
    </div>
  );
}
