import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import { Header } from "./Header";
import { Spinner } from ".";

export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log("is loading: ", isLoading);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Spinner />}
      <Header />

      <main className="overflow-scroll">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};
