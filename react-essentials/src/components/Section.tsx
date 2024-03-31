export const Section: React.FC<
  { title: string } & React.AllHTMLAttributes<HTMLElement> &
    React.PropsWithChildren
> = ({ title, children, ...rest }) => {
  return (
    <section {...rest}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
