import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services";
import MenuItem from "./MenuItem";
import { Pizza } from "../../models";

function Menu() {
  const result = useLoaderData();
  const menu: Pizza[] = [...(result as Pizza[])];

  return (
    <ul className="grid grid-cols-3 gap-y-4 m-4">
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}

export const menuLoader = async () => {
  const menu = await getMenu();

  return menu;
};

export default Menu;
