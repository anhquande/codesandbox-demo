import React from "react";

export function ChildGreen({ counter }) {
  console.log("ChildGreen render");
  return (
    <div style={{ border: "2px dashed #00cc00" }}>
      <div>ChildGreen</div>
      <div>Counter in Green : {counter}</div>
    </div>
  );
}
