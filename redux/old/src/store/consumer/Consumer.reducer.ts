import { Action } from "../../shared";
import { ConsumerTypes } from "./Consumer.types";

export type ConsumerState = {
  fullName: string;
  nationalID: string;
  createdAt: string;
};

const initialState: ConsumerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const reducer = (
  state: ConsumerState = initialState,
  action: Action
): ConsumerState => {
  const { type, payload } = action;

  switch (type) {
    case ConsumerTypes.create:
      return {
        ...StaticRange,
        ...payload,
      };
    case ConsumerTypes.update:
      return {
        ...state,
        fullName: payload,
      };
    default:
      return state;
  }
};

export default reducer;
