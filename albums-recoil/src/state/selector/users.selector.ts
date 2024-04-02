import { selector } from "recoil";
import axios from "axios";

import { BASE_URL } from "../../constant";
import { IUser } from "../../model";

export const usersQuery = selector<IUser[]>({
  key: "usersQuery",
  get: async () => {
    console.log("i am runing the selector");

    const res = await axios.get(`${BASE_URL}/users`);
    return res.data;
  },
});
