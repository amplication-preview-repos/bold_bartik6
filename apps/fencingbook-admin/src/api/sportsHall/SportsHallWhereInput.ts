import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SportsHallWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  shortName?: StringNullableFilter;
};
