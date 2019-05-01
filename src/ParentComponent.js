import React, { useState } from "react";
import { ChildRed } from "./ChildRed";
import { ChildGreen } from "./ChildGreen";
import { useCounter } from "./useCounter";
import { ChildBlue } from "./ChildBlue";
import { Yellow } from "./Yellow";
import { Orange } from "./Orange";
import { Cyan } from "./Cyan";

export function ParentComponent(props) {
  console.log("ParentComponent render");

  const { counter, incCounter, incCounterWithMemo, items } = useCounter();
  return (
    <div
      style={{
        border: "3px ridge rgba(204,204,204,0.2)",
        backgroundColor: "rgba(204,204,204,0.6)",
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
      <Orange />
      <Cyan incCounter={incCounterWithMemo} />
    </div>
  );
}
