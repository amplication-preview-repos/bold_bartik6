import { Club } from "../club/Club";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  club?: Array<Club>;
  createdAt: Date;
  email: string | null;
  id: string;
  profiles?: Array<Profile>;
  role: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
