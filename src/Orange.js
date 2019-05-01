import React from "react";

function Orange_({ items }) {
  console.log("Orange render");

  return (
    <div className="child orange">
      <h2>Orange has memo</h2>
      <p>It will NOT be re-rendered</p>
    </div>
  );
}

export const Orange = React.memo(Orange_);
