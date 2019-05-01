import React from "react";

export function ChildGreen({ counter }) {
  console.log("ChildGreen render");
  return (
    <div style={{ border: "1px dashed #00cc00", margin: "8px" }}>
      <div>ChildGreen</div>
      <div>Counter in Green : {counter}</div>
    </div>
  );
}
