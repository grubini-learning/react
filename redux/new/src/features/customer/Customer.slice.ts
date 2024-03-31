import { Action } from "../../shared";

export const enum ConsumerTypes {
  create = "customer/createCostumer",
  update = "customer/updateName",
}
export type CustomerState = {
  fullName: string;
  nationalId: string;
  createdAt: string;
};

const initialState: CustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const reducer = (
  state: CustomerState = initialState,
  action: Action
): CustomerState => {
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

const createCustomer = (
  customer: Pick<CustomerState, "fullName" | "nationalId">
): Action => {
  return {
    type: ConsumerTypes.create,
    payload: { ...customer, createdAt: new Date().toISOString() },
  };
};

const updateName = (fullName: string): Action => {
  return { type: ConsumerTypes.update, payload: fullName };
};

export { reducer as CustomerReducer, createCustomer, updateName };
