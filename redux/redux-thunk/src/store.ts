import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { AccountReducer } from "./features/account/Account.slice";
import { CustomerReducer } from "./features/customer/Customer.slice";

const reducers = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
