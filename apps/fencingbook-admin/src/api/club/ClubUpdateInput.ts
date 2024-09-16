import { UserClubUpdateManyWithoutClubsInput } from "./UserClubUpdateManyWithoutClubsInput";

export type ClubUpdateInput = {
  location?: string | null;
  name?: string | null;
  userClubs?: UserClubUpdateManyWithoutClubsInput;
};
