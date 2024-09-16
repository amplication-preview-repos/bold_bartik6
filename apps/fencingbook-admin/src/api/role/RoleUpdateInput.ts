import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  name?: string | null;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
