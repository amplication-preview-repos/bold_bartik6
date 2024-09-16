import { Club } from "../club/Club";
import { User } from "../user/User";

export type UserClub = {
  club?: Club | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
