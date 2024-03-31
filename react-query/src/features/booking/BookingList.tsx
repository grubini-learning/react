import { useQuery } from "@tanstack/react-query";

import { Booking } from "./Booking";
import { getBookings } from "../../services";

export const BookingList = () => {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: getBookings,
  });

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>error</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Cabin Id</th>
          <th>Booked</th>
          <th>Guest</th>
          <th>Status</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {bookings?.map((booking) => (
          <Booking key={booking.id} {...booking} />
        ))}
      </tbody>
    </table>
  );
};
