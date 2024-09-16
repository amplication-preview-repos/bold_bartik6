import { User } from "../user/User";

export type UserProfile = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
