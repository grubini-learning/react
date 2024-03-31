import { ReactUseCallback } from "./useCallback";
import { ReactUseCustomHook } from "./useCustomHook";
import { ReactUseEffect } from "./useEffect";
import { ReactUseRef } from "./useRef";
// import { useSort } from "./useSort";
import { ReactUseReducer } from "./useReducer";

export type Fruit = { name: string; color: string; score: number };
export type Column<T> = {
  label: string;
  render: (item: T) => JSX.Element;
  sortValue: (item: T) => any;
};

const data: Fruit[] = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 3 },
  { name: "Banana", color: "bg-yellow-500", score: 1 },
  { name: "Lime", color: "bg-green-500", score: 4 },
  { name: "Cherry", color: "bg-red-700", score: 2.5 },
];

const config: Column<Fruit>[] = [
  {
    label: "Name",
    render: (fruit: Fruit) => <>{fruit.name}</>,
    sortValue: (fruit: Fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    sortValue: (fruit: Fruit) => fruit.color,
  },
  {
    label: "Score",
    render: (fruit: Fruit) => <>{fruit.score}</>,
    sortValue: (fruit: Fruit) => fruit.score,
  },
  {
    label: "Score Squared",
    render: (fruit: Fruit) => <>{fruit.score ** 2}</>,
    sortValue: (fruit: Fruit) => fruit.score ** 2,
  },
];

const App = (): JSX.Element => {
  //   const { sortOrder, sortBy, handleSort, sortedData } = useSort<Fruit>(
  //     data,
  //     config
  //   );

  return (
    <>
      <ReactUseEffect />
      <ReactUseCallback />
      <ReactUseRef />
      <ReactUseCustomHook initCount={5} />
      <ReactUseReducer />
    </>
  );
};

export default App;
