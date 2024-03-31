import { PropsWithChildren, createContext, useContext } from "react";

type TTableContext = {
  columns: string;
};

const TableContext = createContext<TTableContext | undefined>(undefined);

const Table = ({
  columns,
  children,
}: PropsWithChildren<{ columns: string }>) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        style={{
          border: "1px solid grey",
          fontSize: "1.4rem",
          backgroundColor: "white",
          borderRadius: "7px",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
};

const useTableContext = () => {
  const context = useContext(TableContext);

  if (context === undefined) {
    throw new Error("The Table Context id undefined");
  }

  return context;
};

const Header = ({ children }: PropsWithChildren<{}>) => {
  const { columns } = useTableContext();

  return (
    <div role="rowgroup">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: columns,
          columnGap: "2.4rem",
          alignItems: "center",
          transition: "none",
          padding: "1.6rem 2.4rem",
          backgroundColor: "white",
          borderBottom: "1px solid light-gray",
          textTransform: "uppercase",
          letterSpacing: "0.4px",
          fontWeight: 600,
          color: "gray",
        }}
        role="row"
      >
        {children}
      </div>
    </div>
  );
};
const Row = ({ children }: PropsWithChildren<{}>) => {
  const { columns } = useTableContext();

  return (
    <div
      role="row"
      style={{
        padding: "1.2rem 2.4rem",
        borderBottom: "1px solid light-gray",
        display: "grid",
        gridTemplateColumns: columns,
        columnGap: "2.4rem",
        alignItems: "center",
        transition: "none",
      }}
    >
      {children}
    </div>
  );
};

const Body = <T,>({
  data,
  render,
}: {
  data: T[];
  render: (item: T) => React.JSX.Element;
}) => {
  return (
    <div role="rowgroup" style={{ margin: "0.4rem 0" }}>
      {data.map(render)}
    </div>
  );
};

const Footer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <footer
      style={{
        backgroundColor: "light-gray",
        display: "flex",
        justifyContent: "center",
        padding: "1.2rem",
      }}
    >
      {children}
    </footer>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export { Table };
