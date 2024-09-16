import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserClubListRelationFilter } from "../userClub/UserClubListRelationFilter";

export type ClubWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  userClubs?: UserClubListRelationFilter;
};
