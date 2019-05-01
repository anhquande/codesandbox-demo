import React from "react";

export const Cyan = React.memo(({ incCounter }) => {
  console.log("Cyan render");

  return (
    <div className="child cyan">
      <h2>Cyan has memo and can change counter</h2>

      <button onClick={() => incCounter()}>Increase Counter</button>
    </div>
  );
});
