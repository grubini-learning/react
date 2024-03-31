import { useSelector } from "react-redux";

import { RootState } from "./store";

import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";

function App() {
  const { fullName, nationalId } = useSelector(
    (store: RootState) => store.customer
  );

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName.length && !nationalId.length ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
