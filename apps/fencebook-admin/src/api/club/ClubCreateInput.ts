import { UserCreateNestedManyWithoutClubsInput } from "./UserCreateNestedManyWithoutClubsInput";

export type ClubCreateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  users?: UserCreateNestedManyWithoutClubsInput;
};
