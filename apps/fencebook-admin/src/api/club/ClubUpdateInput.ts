import { UserUpdateManyWithoutClubsInput } from "./UserUpdateManyWithoutClubsInput";

export type ClubUpdateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  users?: UserUpdateManyWithoutClubsInput;
};
