import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constant";
import { faker } from "@faker-js/faker";
import { IUser } from "../../model";

const addUser = createAsyncThunk("users/add", async () => {
  const user: IUser = { id: nanoid(), name: faker.name.fullName() };
  const res = await axios.post(`${BASE_URL}/users`, user);

  return res.data;
});

export { addUser };
