import { Action } from "../../shared";
import { ConsumerTypes } from "./Consumer.types";
import { ConsumerState } from "./Consumer.reducer";

export const createCustomer = (
  customer: Pick<ConsumerState, "fullName" | "nationalID">
): Action => {
  return {
    type: ConsumerTypes.create,
    payload: { ...customer, createdAt: new Date().toISOString() },
  };
};

export const updateName = (fullName: string): Action => {
  return { type: ConsumerTypes.update, payload: fullName };
};
