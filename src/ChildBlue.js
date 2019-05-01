import React from "react";

export function ChildBlue({ items }) {
  console.log("ChildBlue render");
  return (
    <div className="child blue">
      <h2>ChildBlue</h2>
      {items &&
        items.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
    </div>
  );
}
