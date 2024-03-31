import axios from "axios";
import { BASE_URL, Path } from "./urls.constants";

const BASE_CABINS_URL = `${BASE_URL}/${Path.cabins}`;

export const getCabins = () => {
  return axios
    .get(BASE_CABINS_URL)
    .then((res) => res.data)
    .catch((e) => {
      console.log("there was an error: ", e);
    });
};

export const deleteCabin = (id: string) => {
  return axios
    .delete(`${BASE_CABINS_URL}/${id}`)
    .then((res) => res.data)
    .then((data) => {
      console.log("the deleted data is: ", data);
      return data;
    })
    .catch((e) => {
      console.log("The error is ", e);
    });
};
