import { useState, useCallback, useEffect } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(65);
  const [items, setItems] = useState([]);

  const incCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  useEffect(() => {
      setItems([...items, String.fromCharCode(counter)]);
  }, [counter]);

  const incCounterWithMemo = useCallback(() => incCounter(), []);
  return { counter, setCounter, incCounter, incCounterWithMemo, items };
}
