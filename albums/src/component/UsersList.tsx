import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
import { Skeleton } from "./Skeleton";
import { User } from "./User";
import { addUser, AppDispatch } from "../store";
import Button from "./Button";

export const UsersList = () => {
  const { isLoading, error, users } = useSelector((state: RootState) => {
    return { ...state.app, users: state.users };
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <h1>{error}</h1>;
  } else {
    content = users.map((user) => <User key={user.id} user={user} />);
  }

  return (
    <div className="m-3">
      <div className="flex justify-between mb-3">
        <h2>User's list</h2>
        <Button primary onClick={handleUserAdd}>
          + Add user
        </Button>
      </div>
      {content}
    </div>
  );
};
