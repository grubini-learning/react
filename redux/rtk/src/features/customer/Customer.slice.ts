import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createUser: {
      reducer(
        state,
        action: PayloadAction<{ fullName: string; nationalId: string }>
      ) {
        const { fullName, nationalId } = action.payload;

        state.fullName = fullName;
        state.nationalId = nationalId;
        state.createdAt = new Date().toLocaleDateString();
      },
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
          },
        };
      },
    },
    updateName(state, { payload: { fullName } }) {
      state.fullName = fullName;
    },
  },
});

export default customerSlice.reducer;
export const { createUser, updateName } = customerSlice.actions;
