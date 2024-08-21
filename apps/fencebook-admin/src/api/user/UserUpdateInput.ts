import { ClubUpdateManyWithoutUsersInput } from "./ClubUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  club?: ClubUpdateManyWithoutUsersInput;
  email?: string | null;
  password?: string;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  role?: InputJsonValue;
  sessions?: SessionUpdateManyWithoutUsersInput;
  username?: string;
};
