import React from "react";

export function ChildRed({ items, counter, incCounter, incCounterWithMemo }) {
  console.log("ChildRed render");
  return (
    <div className="child red">
      <h2>Red: changes the counter</h2>
      <div>Counter in Red : {counter}</div>
      <div>
        <button onClick={() => incCounter()}>Increase Counter</button>
      </div>
      <div>
        <button onClick={() => incCounterWithMemo()}>
          Increase Counter (useCallback)
        </button>
      </div>
    </div>
  );
}
