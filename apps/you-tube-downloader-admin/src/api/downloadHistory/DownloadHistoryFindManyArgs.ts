import { DownloadHistoryWhereInput } from "./DownloadHistoryWhereInput";
import { DownloadHistoryOrderByInput } from "./DownloadHistoryOrderByInput";

export type DownloadHistoryFindManyArgs = {
  where?: DownloadHistoryWhereInput;
  orderBy?: Array<DownloadHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
