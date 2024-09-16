import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompetitionWhereInput = {
  category?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  formula?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  sportshall?: StringNullableFilter;
  weapon?: StringNullableFilter;
};
