import { SportsHallWhereInput } from "./SportsHallWhereInput";
import { SportsHallOrderByInput } from "./SportsHallOrderByInput";

export type SportsHallFindManyArgs = {
  where?: SportsHallWhereInput;
  orderBy?: Array<SportsHallOrderByInput>;
  skip?: number;
  take?: number;
};
