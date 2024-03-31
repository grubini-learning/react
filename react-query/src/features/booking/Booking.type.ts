export type TGuest = {
  id: string;
  fullName: string;
  email: string;
  countryFlag: string;
  nationality: string;
};

export type TBooking = {
  id: string;
  created_at: string;
  status: "booked" | "completed" | "progress";
  guest: TGuest;
  cabinId: string;
  price: number;
};
