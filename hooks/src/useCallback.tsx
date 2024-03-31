import { useCallback, useState, useEffect } from "react";

export const ReactUseCallback = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((oldCount) => oldCount + 1);
  };

  // WRONG WAY
  // ==========================================
  //   useEffect(() => {
  //     addOne();
  //   }, [addOne]);
  // ==========================================

  // RIGHT WAY
  // ==========================================
  const stableAddOne = useCallback(addOne, []);

  useEffect(() => {
    stableAddOne();
  }, [stableAddOne]);
  // ==========================================

  return (
    <>
      <p>The useCallback count is {count}</p>
      <button onClick={() => addOne()}>Add</button>
    </>
  );
};
