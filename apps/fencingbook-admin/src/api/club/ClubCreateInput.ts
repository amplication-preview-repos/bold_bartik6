import { UserClubCreateNestedManyWithoutClubsInput } from "./UserClubCreateNestedManyWithoutClubsInput";

export type ClubCreateInput = {
  location?: string | null;
  name?: string | null;
  userClubs?: UserClubCreateNestedManyWithoutClubsInput;
};
