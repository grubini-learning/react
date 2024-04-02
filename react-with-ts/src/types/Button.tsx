import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };
type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

const isAnchor = (props: ButtonProps | AnchorProps): props is AnchorProps => {
  return "href" in props;
};

export const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchor(props)) {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
};
