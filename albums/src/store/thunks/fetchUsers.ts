import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constant";

const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get(`${BASE_URL}/users`);

  await pause(1000);

  return res.data;
});

export { fetchUsers };
