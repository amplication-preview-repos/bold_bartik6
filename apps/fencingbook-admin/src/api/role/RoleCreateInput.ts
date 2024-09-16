import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  name?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
