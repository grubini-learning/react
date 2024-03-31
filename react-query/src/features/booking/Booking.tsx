import { fromUnixTime } from "date-fns";

import { TBooking } from "./Booking.type";

export const Booking = ({
  cabinId,
  created_at,
  price,
  status,
  guest: { fullName },
}: TBooking) => {
  return (
    <tr>
      <td>{cabinId}</td>
      <td>{fromUnixTime(+created_at).toDateString()}</td>
      <td>{fullName}</td>
      <td>{status}</td>
      <td>{price}</td>
    </tr>
  );
};
