import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  userRoles?: UserRoleListRelationFilter;
};
