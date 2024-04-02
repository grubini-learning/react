import {
  type PropsWithChildren,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = PropsWithChildren<{
  as: T;
}> &
  ComponentPropsWithoutRef<T>;

export const Container = <T extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<T>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};
