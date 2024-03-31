import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { actionNewOrder } from "./features/order/CreateOrder";
import Order, { getOrderById } from "./features/order/Order";
import { AppLayout } from "./ui";
import NotFound from "./ui/Error";

// Enables data fetching with data loading
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionNewOrder,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: getOrderById,
      },
    ],
  },
]);

export default () => {
  return <RouterProvider router={router} />;
};
