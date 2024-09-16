import { UserClub as TUserClub } from "../api/userClub/UserClub";

export const USERCLUB_TITLE_FIELD = "id";

export const UserClubTitle = (record: TUserClub): string => {
  return record.id?.toString() || String(record.id);
};
