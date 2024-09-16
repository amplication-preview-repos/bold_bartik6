import { Competition as TCompetition } from "../api/competition/Competition";

export const COMPETITION_TITLE_FIELD = "name";

export const CompetitionTitle = (record: TCompetition): string => {
  return record.name?.toString() || String(record.id);
};
