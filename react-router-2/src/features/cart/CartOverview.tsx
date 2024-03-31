import { Link } from "react-router-dom";
import { Path } from "../../utils";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 uppercase flex align-item-center justify-between sm:px-6">
      <p className="space-x-4 text-stone-300 font-semibold px-4 py-4 sm:px-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={Path.cart}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
