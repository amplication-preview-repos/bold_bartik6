import { User } from "../user/User";

export type Club = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
