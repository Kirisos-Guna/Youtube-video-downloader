import { SortOrder } from "../../util/SortOrder";

export type DownloadHistoryOrderByInput = {
  createdAt?: SortOrder;
  downloadedAt?: SortOrder;
  id?: SortOrder;
  quality?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  videoUrl?: SortOrder;
};
