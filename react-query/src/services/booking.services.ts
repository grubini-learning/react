import axios from "axios";
import { TBooking } from "../features/booking/Booking.type";
import { BASE_URL, Path } from "./urls.constants";

export const getBookings = () => {
  return axios
    .get(`${BASE_URL}/${Path.bookings}/?_embed=guest&_embed=cabin`)
    .then((res) => res.data)
    .then((data) => {
      const bookings: TBooking[] = [];

      for (const { id, guest, created_at, cabinId, status, price } of data) {
        const discountedPrice = parseFloat(price);

        const booking: TBooking = {
          id,
          guest,
          created_at,
          cabinId,
          status,
          price: discountedPrice,
        };
        bookings.push(booking);
      }

      return bookings;
    });
};
