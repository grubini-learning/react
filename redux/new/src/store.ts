import { createStore, combineReducers } from "redux";

import { AccountReducer } from "./features/account/Account.slice";
import { CustomerReducer } from "./features/customer/Customer.slice";

const reducers = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

const store = createStore(reducers);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
