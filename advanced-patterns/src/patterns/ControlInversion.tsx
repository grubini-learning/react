export const ControlInversion = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.JSX.Element;
}) => {
  return <ul>{items.map(render)}</ul>;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
};

export const Product = ({ name, price }: TProduct) => {
  return (
    <li>
      {name} - ${price}
    </li>
  );
};

export type TCompany = {
  id: string;
  name: string;
  address: string;
};

export const Company = ({ name, address }: TCompany) => {
  return (
    <li>
      <h4>{name}</h4>
      <h5>{address}</h5>
    </li>
  );
};

export const listProducts: TProduct[] = [
  { id: "P1", name: "Ring Pop", price: 9.99 },
  { id: "P2", name: "Lost RNF 96", price: 700.0 },
];
export const listCompanies: TCompany[] = [
  { id: "C1", name: "Catalyst", address: "123 Camino Real" },
  {
    id: "C2",
    name: "Giovani Inc",
    address: "155 avenida barcelona, San Clemente",
  },
];
