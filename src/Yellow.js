import React from "react";

export function Yellow({ items }) {
  console.log("Yellow render");

  return (
    <div className="child yellow">
      <h2>Yellow has no memo</h2>
      <p>It will be re-rendered</p>
    </div>
  );
}
