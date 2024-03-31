import { useSelector } from "react-redux";
import { type RootState } from "../../store";

function Customer() {
  const { fullName } = useSelector((store: RootState) => store!.customer);

  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
