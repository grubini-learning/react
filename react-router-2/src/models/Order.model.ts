import { Coordinate } from ".";

export type Order = {
  address: string;
  cart: string[];
  createdAt?: string;
  customer: string;
  estimatedDelivery?: string;
  id?: number;
  orderPrice?: number;
  phone: string;
  priority: boolean;
  priorityPrice?: number;
  status?: string;
  coordinate?: Coordinate;
};
