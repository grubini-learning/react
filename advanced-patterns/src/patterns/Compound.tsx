import { PropsWithChildren, createContext, useContext, useState } from "react";

type CounterContextShape = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const CounterContext = createContext<CounterContextShape | undefined>(
  undefined
);

const Counter = ({ children }: PropsWithChildren<{}>) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((c) => c + 1);
  };

  const decrease = () => {
    setCount((c) => c - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("Counter context is undefined");
  }

  return context;
};

const Count = () => {
  const { count } = useCounterContext();

  return <span>{count}</span>;
};

const Increase = ({ icon }: { icon: string }) => {
  const { increase } = useCounterContext();

  return <button onClick={increase}>{icon}</button>;
};

const Decrease = ({ icon }: { icon: string }) => {
  const { decrease } = useCounterContext();

  return <button onClick={decrease}>{icon}</button>;
};

const Label = ({ children }: PropsWithChildren<{}>) => {
  return <span>{children}</span>;
};

Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
Counter.Label = Label;

export { Counter };
