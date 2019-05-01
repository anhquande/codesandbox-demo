import React from "react";

export function Yellow({ items }) {
  console.log("Yellow render");

  const [myCounter, setMyCounter] = React.useState(0)
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <div>Yellow</div>

<div>MyCounter {myCounter}</div>
    </div>
  );
}
