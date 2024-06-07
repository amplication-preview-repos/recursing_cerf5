import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Advertisement = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
