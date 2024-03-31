import { useRef, useEffect } from "react";

export const ReactUseRef = (): JSX.Element => {
  const divElRef = useRef<HTMLDivElement>(null);

  const changeTheColor = () => {
    divElRef.current!.style.backgroundColor = "green";
  };

  useEffect(() => {
    const handler = (event: Event & { target: any }): void => {
      if (!divElRef.current) return;

      if (divElRef.current?.contains(event.target)) {
        changeTheColor();
      }
    };

    document.body.addEventListener("click", handler, true);

    return () => {
      document.body.removeEventListener("click", handler);
    };
  });

  return (
    <div ref={divElRef}>
      <p>What color am I now?</p>
    </div>
  );
};
