import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { usersAtom, appAtom } from "../state/atom";
import { useUsersActions } from "../state/hook";

import { Skeleton } from "./Skeleton";
import { User } from "./User";
import Button from "./Button";

export const UsersList = () => {
  const users = useRecoilValue(usersAtom);
  const { addUser } = useUsersActions();
  const [{ isLoading, error }, setApp] = useRecoilState(appAtom);

  const handleUserAdd = () => {
    addUser();
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <h1>{error}</h1>;
  } else {
    content = (
      <React.Suspense fallback={<div>Loading...</div>}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </React.Suspense>
    );
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
