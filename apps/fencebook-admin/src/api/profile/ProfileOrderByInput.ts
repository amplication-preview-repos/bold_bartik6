import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  avatar?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
