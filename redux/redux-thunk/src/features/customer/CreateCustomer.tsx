import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { CustomerState, createCustomer } from "./Customer.slice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(
      createCustomer({ fullName, nationalId } as Exclude<
        CustomerState,
        "createdAt"
      >)
    );
    setFullName("");
    setNationalId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button>Create new customer</button>
      </div>
    </form>
  );
}

export default Customer;
