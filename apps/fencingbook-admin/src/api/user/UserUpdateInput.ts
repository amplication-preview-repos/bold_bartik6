import { InputJsonValue } from "../../types";
import { UserClubUpdateManyWithoutUsersInput } from "./UserClubUpdateManyWithoutUsersInput";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  ageCategory?: string | null;
  birthDate?: Date | null;
  club?: string | null;
  country?: string | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  password?: string;
  passwordHash?: string | null;
  region?: string | null;
  roles?: InputJsonValue;
  screenName?: string | null;
  sportsLevel?: string | null;
  userClubs?: UserClubUpdateManyWithoutUsersInput;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  username?: string;
  verificationCode?: string | null;
  weaponType?: string | null;
};
