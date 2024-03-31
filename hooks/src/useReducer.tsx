import { useReducer } from "react";

type State = { initialCount: number };
type Action = { type: string; payload: any };
const enum Operations {
  ADD = "ADD",
  ADDX = "ADDX",
  SUBTRACT = "SUBTRACT",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Operations.ADD:
      return {
        ...state,
        initialCount: state.initialCount + 1,
      };
    case Operations.SUBTRACT:
      return {
        ...state,
        initialCount: state.initialCount - 1,
      };
    case Operations.ADDX:
      return {
        ...state,
        initialCount: state.initialCount + action.payload,
      };
    default:
      return state;
  }
};

export const ReactUseReducer = () => {
  const [{ initialCount }, dispatch] = useReducer(reducer, {
    initialCount: 10,
  });

  return (
    <div>
      The Count is {initialCount}
      <button onClick={() => dispatch({ type: Operations.ADD, payload: null })}>
        Add
      </button>
      <button
        onClick={() => dispatch({ type: Operations.SUBTRACT, payload: null })}
      >
        Subtract
      </button>
      <button onClick={() => dispatch({ type: Operations.ADDX, payload: 10 })}>
        Add 10
      </button>
    </div>
  );
};
