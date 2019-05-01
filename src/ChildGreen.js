import React from "react";

export function ChildGreen({ counter }) {
  console.log("ChildGreen render");
  return (
    <div className="child green">
      <h2>Green: use the counter</h2>
      <div>Counter in Green : {counter}</div>
    </div>
  );
}
