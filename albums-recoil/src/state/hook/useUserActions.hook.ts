import { useRecoilState } from "recoil";
import axios from "axios";
import { faker } from "@faker-js/faker";

import { usersAtom } from "../atom";
import { BASE_URL } from "../../constant";
import { IUser } from "../../model";

export const useUsersActions = () => {
  const [_, setUsers] = useRecoilState(usersAtom);

  const addUser = () => {
    const user: IUser = {
      id: String(Math.random() + 1 * 1000),
      name: faker.name.fullName(),
    };
    axios.post(`${BASE_URL}/users`, user).then((res) => {
      setUsers((currentUsers) => [...currentUsers, user]);
    });
  };

  return {
    addUser,
  };
};
