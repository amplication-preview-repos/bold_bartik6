import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserClubUpdateInput = {
  club?: ClubWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
