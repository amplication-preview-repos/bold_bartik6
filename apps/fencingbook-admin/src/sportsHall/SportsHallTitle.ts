import { SportsHall as TSportsHall } from "../api/sportsHall/SportsHall";

export const SPORTSHALL_TITLE_FIELD = "name";

export const SportsHallTitle = (record: TSportsHall): string => {
  return record.name?.toString() || String(record.id);
};
