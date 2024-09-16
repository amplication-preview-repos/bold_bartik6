import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  role?: RoleWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
