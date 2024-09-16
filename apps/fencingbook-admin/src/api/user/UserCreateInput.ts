import { InputJsonValue } from "../../types";
import { UserClubCreateNestedManyWithoutUsersInput } from "./UserClubCreateNestedManyWithoutUsersInput";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  ageCategory?: string | null;
  birthDate?: Date | null;
  club?: string | null;
  country?: string | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  password: string;
  passwordHash?: string | null;
  region?: string | null;
  roles: InputJsonValue;
  screenName?: string | null;
  sportsLevel?: string | null;
  userClubs?: UserClubCreateNestedManyWithoutUsersInput;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
  username: string;
  verificationCode?: string | null;
  weaponType?: string | null;
};
