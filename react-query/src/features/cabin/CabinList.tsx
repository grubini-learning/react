import { useQuery } from "@tanstack/react-query";

import { Cabin } from "./Cabin";
import { TCabin } from "./Cabin.types";
import { getCabins } from "../../services";

export const CabinList = () => {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Cabin</th>
          <th>Capacity</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cabins.map((cabin: TCabin) => (
          <Cabin key={cabin.id} {...cabin} />
        ))}
      </tbody>
    </table>
  );
};
