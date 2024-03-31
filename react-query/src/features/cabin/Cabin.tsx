import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabin } from "../../services";
import { TCabin } from "./Cabin.types";

export const Cabin = ({
  id,
  capacity,
  name,
  discount,
  imgUrl,
  regularPrice,
}: TCabin) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return (
    <tr>
      <td>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="cabin">{name}</label>
          <img id="cabin" src={imgUrl} alt="null" />
        </div>
      </td>
      <td>{capacity}</td>
      <td>{regularPrice}</td>
      <td>{discount}</td>
      <td>
        <div style={{ cursor: "pointer" }} onClick={() => mutate(id)}>
          ❌
        </div>
      </td>
    </tr>
  );
};

{
  /* <div onClick={() => deleteCabin(id)}>❌</div> */
}
