import React from "react";

export function ChildBlue({ items }) {
  console.log("ChildBlue render");
  return (
    <div style={{ border: "1px dashed #0000cc" }}>
      <div>ChildBlue</div>
      {items &&
        items.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
}
