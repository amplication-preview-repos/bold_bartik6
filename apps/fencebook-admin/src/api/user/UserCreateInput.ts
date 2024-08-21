import { ClubCreateNestedManyWithoutUsersInput } from "./ClubCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  club?: ClubCreateNestedManyWithoutUsersInput;
  email?: string | null;
  password: string;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  role: InputJsonValue;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  username: string;
};
