import { ClubListRelationFilter } from "../club/ClubListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  club?: ClubListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  profiles?: ProfileListRelationFilter;
  sessions?: SessionListRelationFilter;
  username?: StringFilter;
};
