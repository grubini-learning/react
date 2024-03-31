import { Pizza } from "../../models";
import { formatCurrency } from "../../utils";

function MenuItem({ pizza }: { pizza: Pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4">
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
