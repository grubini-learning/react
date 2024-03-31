import { Action } from "../../shared";
import { AccountTypes } from "./Account.types";

type AccountState = {
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

export default reducer;
