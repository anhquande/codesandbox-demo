import React, { useState } from "react";
import { ChildRed } from "./ChildRed";
import { ChildGreen } from "./ChildGreen";
import { useCounter } from "./useCounter";
import { ChildBlue } from "./ChildBlue";
import { Yellow } from "./Yellow";

export function ParentComponent(props) {
  console.log("ParentComponent render");

  const { counter, incCounter, incCounterWithMemo, items } = useCounter();
  return (
    <div
      style={{
        border: "1px solid #cacaca",
        backgroundColor: "#cacaca",
        padding: "8px"
      }}
    >
      <h1>Parent Component in grey</h1>
      <ChildRed
        counter={counter}
        incCounter={incCounter}
        incCounterWithMemo={incCounterWithMemo}
      />
      <ChildGreen counter={counter} />
      <ChildBlue items={items} />
      <Yellow />
    </div>
  );
}
