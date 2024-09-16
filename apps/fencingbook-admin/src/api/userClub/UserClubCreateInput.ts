import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserClubCreateInput = {
  club?: ClubWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
