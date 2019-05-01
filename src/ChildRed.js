import React from "react";

export function ChildRed({ items, counter, incCounter, incCounterWithMemo }) {
  console.log("ChildRed render");
  return (
    <div
      style={{
        border: "1px dashed #ca0000",
        backgroundColor: "#ca0000",
        margin: "8px"
      }}
    >
      <div>ChildRed</div>
      <div>Counter in Red : {counter}</div>
      <div>
        <button onClick={() => incCounter()}>incCounter</button>
      </div>
      <div>
        <button onClick={() => incCounterWithMemo()}>incCounterWithMemo</button>
      </div>
    </div>
  );
}
