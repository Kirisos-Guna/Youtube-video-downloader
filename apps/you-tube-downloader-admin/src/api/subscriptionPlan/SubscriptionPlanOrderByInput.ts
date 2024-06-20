import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlanOrderByInput = {
  createdAt?: SortOrder;
  downloadLimit?: SortOrder;
  features?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  qualityLimit?: SortOrder;
  updatedAt?: SortOrder;
};
