import { Action } from "../../shared";

export const enum AccountTypes {
  loanRequest = "account/loanRequest",
  payLoan = "account/payLoan",
  deposit = "account/deposit",
  withdraw = "account/withdraw",
}

export type AccountState = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (
  state: AccountState = initialState,
  action: Action
): AccountState => {
  const { type, payload } = action;

  switch (type) {
    case AccountTypes.deposit:
      return {
        ...state,
        balance: state.balance + payload,
      };
    case AccountTypes.withdraw:
      return {
        ...state,
        balance: state.balance - payload,
      };
    case AccountTypes.loanRequest:
      if (state.loan > 0) return state;

      return {
        ...state,
        ...payload,
      };
    case AccountTypes.payLoan:
      if (state.balance < state.loan) return state;

      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
};

const deposit = (amount: number): Action => {
  return { type: AccountTypes.deposit, payload: amount };
};

const withdraw = (amount: number): Action => {
  return { type: AccountTypes.withdraw, payload: amount };
};

const requestLoan = (amount: number, purpose: string): Action => {
  return {
    type: AccountTypes.loanRequest,
    payload: { loan: amount, loanPurpose: purpose },
  };
};

const payLoan = (): Action => {
  return { type: AccountTypes.payLoan, payload: null };
};

export { reducer as AccountReducer, deposit, withdraw, requestLoan, payLoan };
