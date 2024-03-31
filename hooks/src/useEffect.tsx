import { useEffect, useState } from "react";

export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);

  // WRONG WAY
  // ==========================================
  //   useEffect(() => {
  //     // Don't do this
  //     document.body.onclick = () => {
  //       console.log(count);
  //     };
  //   }, []);
  // ==========================================

  // WRONG WAY
  // ==========================================
  //   useEffect(() => {
  //     // Don't do this
  //     document.body.onclick = () => {
  //       console.log(count);
  //     };
  //   }, [count]);
  // ==========================================

  // RIGHT WAY
  // ==========================================
  useEffect(() => {
    const listener = () => {
      console.log(count);
    };

    document.body.addEventListener("click", listener);

    return () => {
      document.body.removeEventListener("click", listener);
    };
  }, [count]);
  // ==========================================

  return (
    <div>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Add</button>
      The useEffect Count is {count}
    </div>
  );
};
