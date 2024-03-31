import { createStore, combineReducers } from "redux";

import ConsumerReducer from "./account/Account.reducer";
import AccountReducer from "./consumer/Consumer.reducer";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "./account/Account.actions";
import { createCustomer, updateName } from "./consumer/Consumer.actions";

const reducers = combineReducers({
  account: AccountReducer,
  consumer: ConsumerReducer,
});

const store = createStore(reducers);

store.dispatch(createCustomer({ fullName: "Haley Col", nationalID: "USA" }));
store.dispatch(updateName("Haley Cole"));

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "Buy a car"));
store.dispatch(deposit(700));
console.log(store.getState());

store.dispatch(payLoan());

console.log(store.getState());
