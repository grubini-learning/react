import { useEffect, useState } from "react";

const useCustomHook = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  return {
    count,
    incrementCount,
  };
};

export const ReactUseCustomHook = ({ initCount }: { initCount: number }) => {
  const { count, incrementCount } = useCustomHook(initCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
