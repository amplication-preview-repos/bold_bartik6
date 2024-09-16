import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserClubWhereInput = {
  club?: ClubWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
