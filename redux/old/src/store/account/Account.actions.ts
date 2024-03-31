import { Action } from "../../shared";
import { AccountTypes } from "./Account.types";

export const deposit = (amount: number): Action => {
  return { type: AccountTypes.deposit, payload: amount };
};

export const withdraw = (amount: number): Action => {
  return { type: AccountTypes.withdraw, payload: amount };
};

export const requestLoan = (amount: number, purpose: string): Action => {
  return {
    type: AccountTypes.loanRequest,
    payload: { loan: amount, loanPurpose: purpose },
  };
};

export const payLoan = (): Action => {
  return { type: AccountTypes.payLoan, payload: null };
};
