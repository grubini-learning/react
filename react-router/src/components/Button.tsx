import { PropsWithChildren } from "react";

import classes from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  type,
}: PropsWithChildren<{
  onClick: (e: any) => void;
  type: "primary" | "back";
}>) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${classes[type]}`}>
      {children}
    </button>
  );
};
