import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

interface Container<T extends ElementType> {
  as?: T;
  children: ReactNode;
}

type ContainerProps<T extends ElementType> = Container<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof Container<T>>;

export const Container = <T extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<T>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};
