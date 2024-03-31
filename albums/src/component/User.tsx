import { IUser } from "../model";

export interface UserProps {
  user: IUser;
}

export const User = ({ user: { name } }: UserProps) => {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {name}
      </div>
    </div>
  );
};
