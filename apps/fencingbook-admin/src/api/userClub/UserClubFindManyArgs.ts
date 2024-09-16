import { UserClubWhereInput } from "./UserClubWhereInput";
import { UserClubOrderByInput } from "./UserClubOrderByInput";

export type UserClubFindManyArgs = {
  where?: UserClubWhereInput;
  orderBy?: Array<UserClubOrderByInput>;
  skip?: number;
  take?: number;
};
