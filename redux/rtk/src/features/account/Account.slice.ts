import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    loanRequest: {
      reducer(
        state,
        action: PayloadAction<{ amount: number; purpose: string }>
      ) {
        if (state.loan > 0) return;

        const { amount, purpose } = action.payload;

        state.loan = amount;
        state.loanPurpose = purpose;
        state.balance -= amount;
      },
      prepare(amount: number, purpose: string) {
        return {
          payload: { amount, purpose },
        };
      },
    },
    payLoan(state, _action) {
      if (state.loan === 0 || state.balance - state.loan < 0) return;

      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export default accountSlice.reducer;
export const { deposit, withdraw, loanRequest, payLoan } = accountSlice.actions;
