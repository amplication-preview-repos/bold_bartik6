import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  ageCategory?: SortOrder;
  birthDate?: SortOrder;
  club?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  isVerified?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  passwordHash?: SortOrder;
  region?: SortOrder;
  roles?: SortOrder;
  screenName?: SortOrder;
  sportsLevel?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  verificationCode?: SortOrder;
  weaponType?: SortOrder;
};
