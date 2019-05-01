import React from "react";

export function ChildRed({ items, counter, incCounter, incCounterWithMemo }) {
  console.log("ChildRed render");
  return (
    <div style={{ border: "2px dashed #ca0000" }}>
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
