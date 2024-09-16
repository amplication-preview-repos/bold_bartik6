import { UserRole } from "../userRole/UserRole";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  userRoles?: Array<UserRole>;
};
