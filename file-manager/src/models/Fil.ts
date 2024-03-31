import { Kind } from "../enum";

export type Fil = {
  name: string;
  type: Kind;
  items?: Fil[];
};
