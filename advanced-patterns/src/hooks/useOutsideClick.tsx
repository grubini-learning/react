import { useEffect, useRef } from "react";

export const useOutsideClick = (
  event: keyof HTMLElementEventMap,
  handler: () => void,
  onlyCapturingPhase = true
) => {
  const ref = useRef<any>();

  useEffect(() => {
    const onHandle = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };

    document.addEventListener(event, onHandle, onlyCapturingPhase);

    return () => {
      document.removeEventListener(event, onHandle, onlyCapturingPhase);
    };
  }, [handler]);

  return ref;
};
