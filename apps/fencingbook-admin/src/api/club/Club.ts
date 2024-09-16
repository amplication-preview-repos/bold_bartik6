import { UserClub } from "../userClub/UserClub";

export type Club = {
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
  userClubs?: Array<UserClub>;
};
