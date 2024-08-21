import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  avatar: JsonValue;
  bio: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
  user?: User | null;
};
