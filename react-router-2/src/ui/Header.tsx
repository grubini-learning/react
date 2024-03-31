import { Link } from "react-router-dom";
import { Path } from "../utils";
import { SearchOrder } from "../features/order/SearchOrder";
import { Username } from "../features/user/Username";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-500 sm:px-6">
      <Link to={Path.root} className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};
