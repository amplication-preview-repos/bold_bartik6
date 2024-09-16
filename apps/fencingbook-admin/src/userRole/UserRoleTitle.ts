import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "id";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.id?.toString() || String(record.id);
};
