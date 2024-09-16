import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  createdAt: Date;
  id: string;
  role?: Role | null;
  updatedAt: Date;
  user?: User | null;
};
