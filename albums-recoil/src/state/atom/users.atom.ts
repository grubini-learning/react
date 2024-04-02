import { atom } from "recoil";

import { IUser } from "../../model";
import { usersQuery } from "../selector";

type SliceState = IUser[];
const initialState: SliceState = [];

const usersAtom = atom({
  key: "usersAtom",
  default: usersQuery,
});

export { usersAtom };
